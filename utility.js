const geolib = require('geolib')

// Given two coordinates, return the distance between the two in miles
const findDistance = (origin, destination) => {
    let meters = geolib.getDistance(
        { latitude: origin.lat, longitude: origin.lon },
        { latitude: destination.lat, longitude: destination.lon }
    );
    const milesConverstion = meters * 0.00062137
    const approximateDistance = Math.round(milesConverstion * 100) / 100
    return approximateDistance
}

// Wait a few seconds
const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

// Horizontally merges two array of objects
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

// Output formatting for objects
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

// Given a station name remove error prone words
const cleanStationName = (station) => {
    let stationName
    //TODO REGEX
    if (station.includes("Berlin")) {
        stationName = encodeURI(station.replace("Reisezentrum Berlin", "").trim())
    } else {
        stationName = encodeURI(station.replace("Reisezentrum", "").trim())
    }
    return stationName
}

// Given an array of stations remove null
// null was returned for stations that did not meet criteria or were not found
const cleanAcceptedStations = (acceptableStations) => {
    const startIndex = 0
    const cutOff = 5
    const criteriaAcceptedStations = acceptableStations.filter(station => station.name != null)
    return criteriaAcceptedStations.splice(startIndex, cutOff)
}

module.exports = { findDistance, merge, cleanStationName, wait, cleanAcceptedStations, objectSystemOut }