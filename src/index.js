const geolib = require('geolib')
const { Berlin, Hamburg } = require('./lib/resource')
const { getStationsInProximity, getStationData } = require('./server/service')
const makeUtilities = require('./lib/utilityFactory')()
const utilities = makeUtilities(geolib)

//Given a state object, return stations within a radius
const getStationsNear = async (stateData, radius) => {
    console.log(`Looking for stations within a ${radius} radius`)
    const criteriaAcceptedStations = await getStationsInProximity(stateData, radius)
        .then(async proximityStations => {
            return await aggregateAcceptableStations(proximityStations.data, stateData)
        }).then(async acceptableStations => {
            return utilities.cleanAcceptedStations(acceptableStations)
        }).then(async fiveNearestStations => {
            //If there are not 5 accepted stations try again increase radius
            if (fiveNearestStations === null) {
                console.log("Please wait while we check further")
                await utilities.wait(2)
                return getStationsNear(stateData, radius + 5)
            }
            return fiveNearestStations
        })
    return criteriaAcceptedStations
}

//Given an array of stations only return acceptance criteria accepted stations
const aggregateAcceptableStations = (proximityStations, stateData) => {
    let acceptableStations = proximityStations.map(async station => {
        const stationName = utilities.cleanStationName(station.name)
        const result = await validateStation(stationName, stateData.name, stateData.requirement)
        let resultObj = {
            name: result,
            lat: station.lat,
            lon: station.lon
        }
        return resultObj
    })
    return Promise.all(acceptableStations).then((values) => { return values });
}

//Validates station and returns station name
const validateStation = async (station, state, requirement) => {
    let isValid = false
    let stationName
    try {
        const response = await getStationData(station, state)
        const stationData = response.data.result[0]
        isValid = stationData[requirement]
        stationName = stationData.name
    } catch (err) {
        // Doesn't satisfy criteria and or not found
        // console.error(`Error 404 for request ${stationName}`)
        return null
    }
    if (isValid) return stationName
    else return null
}

//Start Script
//Get 5 center most stations in Berlin
getStationsNear(Berlin, 1)
    .then(async berlinStations => {
        console.log(`Berlin center most stations:`)
        berlinStations.forEach(station => {
            utilities.objectSystemOut(station)
        })
        console.log('---\n')
        //Wait to avoid server timeout
        await utilities.wait(2);
        return berlinStations
    }).then(async berlinStations => {
        //Get 5 center most stations in Hamburg
        console.log(`Hamburg center most stations:`)
        const hamburgStations = await getStationsNear(Hamburg, 15)
        hamburgStations.forEach(station => {
            utilities.objectSystemOut(station)
        })

        // console.log(hamburgStations)
        console.log('---\n')
        //Merge stations assuming there exist a travel route between them
        return utilities.merge(hamburgStations, berlinStations)
    }).then(routes => {
        //Calculate distances between routes
        routes.forEach(route => {
            route.distance = utilities.findDistance(route.origin, route.destination)
        })
        return routes
    }).then(routeDetails => {
        //5 station pairs from Hamburg to Berlin and their travel distances
        console.log(`Itinerary, Hamburg to Berlin station options:`)
        routeDetails.forEach(station => {
            utilities.objectSystemOut(station)
        })
    }).catch(err => {
        console.error(`Error ${err}`)
    })


