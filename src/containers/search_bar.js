import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state         = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit  = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({
      term: ''
    });
  }



  render() {
    return (
      <div>
        <form  onSubmit    = {this.onFormSubmit} className = 'input-group'>
        <input type        = "text"
               placeholder = 'Get a five days forecasts in your favourite cities...'
               className   = 'form-control'
               value       = {this.state.term}
            // Remember when I am passing callback around with this, I need to bind it unless I use the fat arrow function concept of ES6. Otherwise, it is gonna throw an undefined error
            onChange = {this.onInputChange}
          />
          <span   className = 'input-group-btn'>
          <button type      = 'submit' className = 'btn btn-secondary'>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToPros)(SearchBar);

