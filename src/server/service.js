const axios = require('axios')
const { apiRoot, header } = require('../lib/resource')
const getStationsInProximity = async (stateData, radius) => {
    const url = `${apiRoot}/reisezentren/v1/reisezentren/loc/${stateData.lon}/${stateData.lat}/${radius}`
    const result = await axios.get(url, header)
        .then(response => {
            if (response.data) return response
        })
        .catch(err => {
            // TODO mocks server for testing this section, 
            // API doesn't return any other status code other than 200
            console.error(`Error ${err}`)
            return err
        })
    return result
}

const getStationData = async (stationName, state) => {
    const url = `${apiRoot}/stada/v2/stations?searchstring=*${stationName}&federalstate=${state}`
    const result = await axios.get(url, header)
        .then(response => {
            if (response.data) return response
        })
        .catch(err => {
            console.error(`${err} - ${stationName}`)
            return err
        })
    return result
}

module.exports = { getStationData, getStationsInProximity }