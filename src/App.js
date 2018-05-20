import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { readAirportList, searchFlights } from './api.js'

class App extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      loading: false,
      airportsList: null,
      searchParams: {
        from: null,//'WAW',
        to: null,//'CDG', 
        departDate:null,// '2018-06-19',
        returnDate: null// '2018-06-20'
    }
    }
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <a onClick={this.handleClick}>click me</a>
        </p>
      </div>
    );
  }
}

export default App;
