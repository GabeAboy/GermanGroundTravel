const { lessThanFiveAcceptableStations, nonNullArrayOfStations, arrayOfStations, merged, destinations, origins } = require('../resource')
const geolib = require('geolib')
const makeUtilities = require('../../src/lib/utilityFactory')()
const utilities = makeUtilities(geolib)

describe('cleanStationNameBerlin', () => {
    const stationName = "Reisezentrum Berlin Alexanderplatz"
    it('Should only contain Alexanderplatz', () => {
        expect(utilities.cleanStationName(stationName)).toBe("Alexanderplatz")
    })
})

describe('cleanStationNameHamburg', () => {
    const stationName = "Reisezentrum Berlin Alexanderplatz"
    it('Should only contain Alexanderplatz', () => {
        expect(utilities.cleanStationName(stationName)).toBe("Alexanderplatz")
    })
})

describe('cleanAcceptedStations', () => {
    it('Returned array should not contain null', () => {
        expect(utilities.cleanAcceptedStations(arrayOfStations)).toMatchObject(nonNullArrayOfStations)
    })
})

describe('cleanAcceptedStations', () => {
    it('Should only contain 5 items', () => {
        expect(utilities.cleanAcceptedStations(arrayOfStations)).toHaveLength(5)
    })
})

describe('cleanAcceptedStations', () => {
    it('Should return an array', () => {
        expect(Array.isArray(utilities.cleanAcceptedStations(arrayOfStations))).toBeTruthy()
    })
})

describe('cleanAcceptedStations', () => {
    it('Should return null', () => {
        expect(utilities.cleanAcceptedStations(lessThanFiveAcceptableStations)).toBe(null)
    })
})

describe('Merge', () => {
    it('Should be return an array', () => {
        expect(Array.isArray(utilities.merge(origins, destinations))).toBeTruthy()
    })
})

describe('Merge', () => {
    it('Should be horizontal merge', () => {
        expect(utilities.merge(origins, destinations)).toMatchObject(merged)
    })
})

describe('Merge', () => {
    it('Should only return 5 objects', () => {
        expect(utilities.merge(origins, destinations)).toHaveLength(5)
    })
})

describe('Merge', () => {
    it('Should only return proper array of objects', () => {
        const route = utilities.merge(origins, destinations)[0]
        expect(route).toHaveProperty("origin")
        expect(route).toHaveProperty("destination")
        expect(route).toHaveProperty("distance")
    })
})

describe('findDistance', () => {
    it('Should return the expected distance', () => {
        const origin = origins[0]
        const destination = destinations[0]
        expect(utilities.findDistance(origin,destination)).toBe(159.39)
    })
})
