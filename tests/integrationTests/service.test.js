const { getStationsInProximity, getStationData } = require('../../src/server/service')
const { Berlin } = require('../resource')

describe('getStationsInProximity', () => {
    it('Should return status 200 and data', async () => {
        const response = await getStationsInProximity(Berlin)
        expect(response.status).toBe(200)
        expect(response.data).not.toBe([])
    })
})

describe('getStationsInProximity', () => {
    it('Should not return any data', async () => {
        const Boston = { lat: 42.3601, lon: 71.0589 }
        // Api returns 200 for invalid queries - expect(response.status).toBe(404)
        const response = await getStationsInProximity(Boston)
        expect(response.data).toStrictEqual([])
    })
})

describe('getStationData', () => {
    it('Should return status 200 and data', async () => {
        const response = await getStationData("Alexanderplatz", "Berlin")
        expect(response.status).toBe(200)
        expect(response.data.total).toBe(1)
    })
})

describe('getStationData', () => {
    it('Should return status 404 not found', async () => {
        const response = await getStationData("Alexanderplatz", "Moscow")
        expect(response.response.status).toBe(404)
    })
})