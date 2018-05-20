import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { readAirportList, searchFlights } from './api.js'
import Loading from './Loading'
import SearchForm from './SearchForm'
import FlightList from './FlightList'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    // this.getAirportsList = this.getAirportsList.bind(this)

    this.state = {
      isLoading: false,
      airports: null,
      flights: null,
      searchParams: {
        from: null,//'WAW',
        to: null,//'CDG', 
        departDate:null,// '2018-06-19',
        returnDate: null// '2018-06-20'
      }
    }
  }


  componentDidMount() {
    this.setState({isLoading: true})
    readAirportList().then((airports) => {
      this.setState({airports, isLoading: false });
    }).catch((error) => console.warn(error))
  }

  handleClick() {
    // readAirportList().then(function(data) {console.log(data)})// array of airports
    const params = {
      from: 'WAW',
      to: 'CDG', 
      departDate: '2018-06-19',
      returnDate: '2018-06-20'
    }
    searchFlights(this.state.searchParams).then(function(data){console.log(data)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Loading isLoading={this.state.isLoading}/>
        {!this.state.isLoading 
          && this.state.flights === null 
          && <SearchForm />}
        {!this.state.isLoading 
          && this.state.flights !== null 
          && <FlightList />}
      </div>
    );
  }
}

export default App;
