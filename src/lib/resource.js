const path = require('path')
const projPath = path.join(__dirname, '../../')
require('dotenv').config({ path: projPath + '/.env' })

const Berlin = {
    name: "Berlin",
    lon: 52.516667,
    lat: 13.388889,
    requirement: 'hasLocalPublicTransport'
}

const Hamburg = {
    name: "Hamburg",
    lat: 10.001389,
    lon: 53.565278,
    requirement: 'hasParking'
}

const apiRoot = "https://api.deutschebahn.com"

const header = {
    headers: {
        Authorization: 'Bearer ' + process.env.TOKEN
    }
}

module.exports = { apiRoot, Hamburg, Berlin, header }