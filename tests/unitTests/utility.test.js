const { findDistance, merge, cleanAcceptedStations, cleanStationName } = require('../../utility')
const { nonNullArrayOfStations, arrayOfStations, merged, destinations, origins } = require('../resource')

describe('cleanStationNameBerlin', () => {
    const stationName = "Reisezentrum Berlin Alexanderplatz"
    it('Should only contain Alexanderplatz', () => {
        expect(cleanStationName(stationName)).toBe("Alexanderplatz")
    })
})

describe('cleanStationNameHamburg', () => {
    const stationName = "Reisezentrum Berlin Alexanderplatz"
    it('Should only contain Alexanderplatz', () => {
        expect(cleanStationName(stationName)).toBe("Alexanderplatz")
    })
})

describe('cleanAcceptedStations', () => {
    it('Should not contain null', () => {
        expect(cleanAcceptedStations(arrayOfStations)).toMatchObject(nonNullArrayOfStations)
    })
})

describe('cleanAcceptedStations', () => {
    it('Should only contain 5 items', () => {
        expect(cleanAcceptedStations(arrayOfStations)).toHaveLength(5)
    })
})

describe('cleanAcceptedStations', () => {
    it('Should return an array', () => {
        expect(Array.isArray(cleanAcceptedStations(arrayOfStations))).toBeTruthy()
    })
})

describe('Merge', () => {
    it('Should be return an array', () => {
        expect(Array.isArray(merge(origins, destinations))).toBeTruthy()
    })
})

describe('Merge', () => {
    it('Should be horizontal merge', () => {
        expect(merge(origins, destinations)).toMatchObject(merged)
    })
})

describe('Merge', () => {
    it('Should only return 5 objects', () => {
        expect(merge(origins, destinations)).toHaveLength(5)
    })
})

describe('Merge', () => {
    it('Should only return proper array of objects', () => {
        const route = merge(origins, destinations)[0]
        expect(route).toHaveProperty("origin")
        expect(route).toHaveProperty("destination")
        expect(route).toHaveProperty("distance")
    })
})

describe('findDistance', () => {
    it('Should return the expected distance', () => {
        const origin = origins[0]
        const destination = destinations[0]
        expect(findDistance(origin,destination)).toBe(159.39)
    })
})
