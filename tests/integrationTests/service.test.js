const { getStationsInProximity, getStationData } = require('../../service')
const { Berlin } = require('../../resource')

describe('getStationsInProximity', () => {
    it('Should return status 200 and data', async () => {
        const response  = await getStationsInProximity(Berlin)
        expect(response.status).toBe(200)
        expect(response.data).not.toBe([])
    })
})

describe('getStationData', () => {
    it('Should return status 200 and data', async () => {
        const response  = await getStationData("Alexanderplatz","Berlin")
        expect(response.status).toBe(200)
        expect(response.data.total).toBe(1)
    })
})