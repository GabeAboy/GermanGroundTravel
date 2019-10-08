const axios = require('axios')
const { apiRoot, header } = require('../lib/resource')
const getStationsInProximity = async (stateData) => {
    const url = `${apiRoot}/reisezentren/v1/reisezentren/loc/${stateData.lon}/${stateData.lat}/30`
    const result = await axios.get(url, header)
        .then(response => {
            if (response.data) return response
        })
        .catch(err => {
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