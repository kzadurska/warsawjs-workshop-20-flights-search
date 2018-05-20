import React, { Component } from 'react';

const FlightList = ({ flights, onFlightsReset, ...props }) => 
	<section className="App-section App-results">
    <div>
      <h2>Flight list</h2>
      <FilterFlights {...props} />
      <button type="button" onClick={onFlightsReset}>Reset search</button>
    </div>
    <ul>
      {
        flights.map(flight => <Flight key={flight.id} {...flight} {...props} />)
      }
    </ul>
  </section>

export default FlightList

class FilterFlights extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minPrice: 0,
      maxPrice: 10000
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: parseInt(event.target.value, 10)})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.filterPrice(this.state.minPrice, this.state.maxPrice)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.minPrice} name="minPrice" type="number" onChange={this.handleChange} />
        <input value={this.state.maxPrice} name="maxPrice" type="number" onChange={this.handleChange}/>
        <button>Filter prices</button>
      </form>
    )
  }
}

const Flight = ({ inboundAirport, outboundAirport, price, inboundPath, outboundPath, displayCity}) =>
  <li className="withMarginBottom">
    <div><strong>${price} {displayCity(inboundAirport)} - {displayCity(outboundAirport)}</strong></div>
    <div className="withMarginBottom">
      <div>To {displayCity(inboundAirport)}</div>
      <ol>
        {
          inboundPath.map(path => (
            <li key={`${path.airportFrom}_${path.airportTo}`}>
              {displayCity(path.airportFrom)} - {displayCity(path.airportTo)}, {path.length}h 
            </li>))
        }
      </ol>
    </div>
    <div className="withMarginBottom">
      <div>To {displayCity(outboundAirport)}</div>
      <ol>
        {
          outboundPath.map(path => (
            <li key={`${path.airportFrom}_${path.airportTo}`}>
              {displayCity(path.airportFrom)} - {displayCity(path.airportTo)}, length: {path.length}h 
            </li>))
        }
      </ol>
    </div>
  </li>