import React, { Component } from 'react';

const DEFAULT_VALUES = {
  dateFrom: '',
  dateTo: '',
  cityFrom: '',
  cityTo: ''
}

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = DEFAULT_VALUES
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleReset(event) {
    event.preventDefault()
    this.setState(DEFAULT_VALUES)
  }
    
  handleSubmit(event) {
    event.preventDefault()

    this.props.onFlightSearch(this.state)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

	render() {
    return(
      <section className="App-section">
        <h2>Search form</h2>
        <form 
          className="App-form" 
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}>
          <div className="App-form-body">
            <label className="App-label">From:
              <select 
                name="cityFrom"
                value={this.state.cityFrom} 
                onChange={this.handleChange}>
                {
                  this.props.airports.map(airport => 
                    <Airport 
                      {...airport}  
                      key={airport.id}  />
                  )
                }
              </select>
            </label>
            <label className="App-label">To:
              <select 
                name="cityTo" 
                onChange={this.handleChange}
                value={this.state.cityTo}>
                {
                  this.props.airports.map(airport => 
                    <Airport 
                      {...airport}  
                      key={airport.id} />
                  )
                }
              </select>
            </label>
          </div>
          <div className="App-form-body">
            <label className="App-label">Depart on:
              <input 
                type="date"
                name="dateFrom" 
                placeholder="YYYY-MM-DD" 
                value={this.state.dateFrom} 
                onChange={this.handleChange} />
            </label>
            <label className="App-label">Return on:
              <input 
                type="date"
                name="dateTo" 
                placeholder="YYYY-MM-DD" 
                value={this.state.dateTo} 
                onChange={this.handleChange} />
            </label>
          </div>
          <div className="App-form-footer">
            <button 
              className="App-button"
              type="submit">
              Search
            </button>
            <button 
              className="App-button"
              type="reset">
              Reset search
            </button>
          </div>
          
        </form>
      </section>
    )
  }
}

const Airport = ({ id, city, country, code }) => 
  <option value={code}>
    {city} {country} {code}
  </option>

export default SearchForm