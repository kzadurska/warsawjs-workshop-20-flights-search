import React from 'react';

const FlightList = ({ flights, onFlightsReset, ...props }) => 
	<section className="App-section App-results">
    <div>
      <h2>Flight list</h2>
      <button type="button" onClick={onFlightsReset}>Reset search</button>
    </div>
    <ul>
      {
        flights.map(flight => <Flight key={flight.id} {...flight} {...props} />)
      }
    </ul>
  </section>

export default FlightList

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