require('dotenv/config')

const Berlin = {
    name: "Berlin",
    long: 52.516667,
    lat: 13.388889,
    requirement: 'hasLocalPublicTransport'
}

const Hamburg = {
    name: "Hamburg",
    lat: 10.001389,
    long: 53.565278,
    requirement: 'hasParking'
}

const apiRoot = "https://api.deutschebahn.com"

const header = {
    headers: {
        Authorization: 'Bearer ' + process.env.TOKEN
    }
}

module.exports = { apiRoot, Hamburg, Berlin, header }