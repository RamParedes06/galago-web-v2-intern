const server = process.env.REACT_APP_API_URL

const ApiRoute = {
    searchAirports: server+'/galago-utilities/airport-lists',
    searchOneWayFlights: server+'/flights/one-way/search',
    // searchAirports2: `${server+}/galago-utilities/airport-lists?airportSearch=`
}

export default ApiRoute