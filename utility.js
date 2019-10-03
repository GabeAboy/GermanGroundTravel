const geolib = require('geolib')

const findDistance = (origin, destination) => {
    let meters = geolib.getDistance(
        { latitude: origin.lat, longitude: origin.lon },
        { latitude: destination.lat, longitude: destination.lon }
    );
    const milesConverstion = meters * 0.00062137
    const approximateDistance = Math.round(milesConverstion * 100) / 100
    return approximateDistance
}

const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const merge = (origin, destination) => {
    if (origin.length != destination.length) return null
    const len = origin.length
    let routeResolutions = []
    for (let i = 0; i < len; i++) {
        let obj = {
            origin: origin[i],
            destination: destination[i],
            distance: 0
        }
        routeResolutions.push(obj)
    }
    return routeResolutions
}

const objectSystemOut = (obj) => {
    console.log('{')
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(`${key}:`)
            objectSystemOut(obj[key])
        }
        else {
            console.log(`\t${key}: ${obj[key]}`)
        }
    }
    console.log('}')
}

const cleanStationName = (station) => {
    let stationName
    //TODO SOME FANCY REGEX
    if (station.includes("Berlin")) {
        stationName = encodeURI(station.replace("Reisezentrum Berlin", "").trim())
    } else {
        stationName = encodeURI(station.replace("Reisezentrum", "").trim())
    }
    return stationName
}

const cleanAcceptedStations = (acceptableStations) => {
    const startIndex = 0
    const cutOff = 5
    const criteriaAcceptedStations = acceptableStations.filter(station => station.name != null)
    return criteriaAcceptedStations.splice(startIndex, cutOff)
}

module.exports = { findDistance, merge, cleanStationName, wait, cleanAcceptedStations, objectSystemOut }