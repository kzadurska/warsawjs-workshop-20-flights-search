import React, { Component } from 'react';
import './App.css';
import { readAirportList, searchFlights } from './api.js'
import Loading from './Loading'
import SearchForm from './SearchForm'
import FlightList from './FlightList'



class App extends Component {
  constructor(props) {
    super(props)

    this.onFlightSearch = this.onFlightSearch.bind(this)
    this.onFlightsReset = this.onFlightsReset.bind(this)
    this.displayCity = this.displayCity.bind(this)
    // this.onFlightSearchReset = this.onFlightSearchReset.bind(this)

    this.state = {
      isLoading: false,
      airports: null,
      flights: null,
      searchParams: null
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    readAirportList()
      .then((airports) => {
        this.setState({airports, isLoading: false });
      })
      .catch((error) => console.warn(error))
  }

  onFlightSearch(params) {
    this.setState({ isLoading: true })

    searchFlights(params)
      .then((flights) => {
        this.setState({ flights, isLoading: false, searchParams: params })
      })
      .catch(error => console.warn(error))
  }

  onFlightsReset() {
    this.setState({ flights: null })
  }

  displayCity(code) {
    const place = this.state.airports.find(airport => airport.code === code)
    return `${place.city} ${place.code}`
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flight search app</h1>
        </header>
        <Loading isLoading={this.state.isLoading}/>
        {!this.state.isLoading 
          && this.state.airports !== null 
          && this.state.flights == null
          && <SearchForm 
            airports={this.state.airports} 
            onFlightSearch={this.onFlightSearch} />}
        {!this.state.isLoading 
          && this.state.flights !== null 
          && <FlightList 
            flights={this.state.flights}
            displayCity={this.displayCity}
            onFlightsReset={this.onFlightsReset}/>}
      </div>
    );
  }
}

export default App;
