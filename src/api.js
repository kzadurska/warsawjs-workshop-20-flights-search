const readAirportList = ()  => {
	return window.fetch('https://warsawjs-flights-api.herokuapp.com/airports')
		.then(function(response) {
      return response.json()
    })
}

const searchFlights = ({ departDate, returnDate, from, to }) => {
  const url = 'https://warsawjs-flights-api.herokuapp.com'
  return window.fetch(`${url}/flights/${departDate}/${returnDate}/${from}/${to}`,)
    .then(function(response){
      return response.json()
    })
}

export { readAirportList, searchFlights }