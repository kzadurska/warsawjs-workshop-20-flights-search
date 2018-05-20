const readAirportList = ()  => {
	return window.fetch('https://warsawjs-flights-api.herokuapp.com/airports')
		.then(function(response) {
      return response.json()
    })
}

const searchFlights = ({ dateFrom, dateTo, cityFrom, cityTo }) => {
  const url = 'https://warsawjs-flights-api.herokuapp.com'
  return window.fetch(`${url}/flights/${dateFrom}/${dateTo}/${cityFrom}/${cityTo}`)
    .then(function(response){
      return response.json()
    })
}

export { readAirportList, searchFlights }