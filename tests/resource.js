const origin =
    [{ name: 'Hamburg Dammtor', lat: 53.5608, lon: 9.98968 },
    { name: 'Hamburg Hbf', lat: 53.553722, lon: 10.00801 },
    { name: 'Hamburg-Altona', lat: 53.552295, lon: 9.934459 },
    { name: 'Hamburg-Bergedorf', lat: 53.489151, lon: 10.206024 },
    { name: 'Hamburg-Harburg', lat: 53.456008, lon: 9.990332 }]

const destination =
    [{ name: 'Alexanderplatz', lat: 52.521853, lon: 13.41124 },
    { name: 'Berlin-Friedrichstraße', lat: 52.520469, lon: 13.387174 },
    { name: 'Berlin Ostbahnhof', lat: 52.510483, lon: 13.433203 },
    { name: 'Berlin Südkreuz', lat: 52.475165, lon: 13.365929 },
    { name: 'Berlin Zoologischer Garten', lat: 52.507082, lon: 13.332479 }]
const merged =
    [{
        origin: { name: 'Hamburg Dammtor', lat: 53.5608, lon: 9.98968 },
        destination: { name: 'Alexanderplatz', lat: 52.521853, lon: 13.41124 },
        distance: 0
    },
    {
        origin: { name: 'Hamburg Hbf', lat: 53.553722, lon: 10.00801 },
        destination: { name: 'Berlin-Friedrichstraße', lat: 52.520469, lon: 13.387174 },
        distance: 0
    },
    {
        origin: { name: 'Hamburg-Altona', lat: 53.552295, lon: 9.934459 },
        destination: { name: 'Berlin Ostbahnhof', lat: 52.510483, lon: 13.433203 },
        distance: 0
    },
    {
        origin: { name: 'Hamburg-Bergedorf', lat: 53.489151, lon: 10.206024 },
        destination: { name: 'Berlin Südkreuz', lat: 52.475165, lon: 13.365929 },
        distance: 0
    },
    {
        origin: { name: 'Hamburg-Harburg', lat: 53.456008, lon: 9.990332 },
        destination: { name: 'Berlin Zoologischer Garten', lat: 52.507082, lon: 13.332479 },
        distance: 0
    }]
const arrayOfStations =
    [{ name: null, lat: 53.669223, lon: 10.234857 },
    { name: null, lat: 53.470975, lon: 9.686119 },
    { name: 'Hamburg Dammtor', lat: 53.5608, lon: 9.98968 },
    { name: 'Hamburg Hbf', lat: 53.553722, lon: 10.00801 },
    { name: 'Hamburg-Altona', lat: 53.552295, lon: 9.934459 },
    { name: 'Hamburg-Bergedorf', lat: 53.489151, lon: 10.206024 },
    { name: 'Hamburg-Harburg', lat: 53.456008, lon: 9.990332 },
    { name: null, lat: 53.6554, lon: 9.7978 },
    { name: null, lat: 53.387529, lon: 10.10894 }]

const nonNullArrayOfStations = [
    { name: 'Hamburg Dammtor', lat: 53.5608, lon: 9.98968 },
    { name: 'Hamburg Hbf', lat: 53.553722, lon: 10.00801 },
    { name: 'Hamburg-Altona', lat: 53.552295, lon: 9.934459 },
    { name: 'Hamburg-Bergedorf', lat: 53.489151, lon: 10.206024 },
    { name: 'Hamburg-Harburg', lat: 53.456008, lon: 9.990332 }]
module.exports = { nonNullArrayOfStations, arrayOfStations, merged, destination, origin }