import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData) {
    // console.log('Object keys: ', _.keys(cityData.list));
    // console.log('Object values: ', _.values(cityData.list));
    const temps = cityData.list.map((weather) => weather.main.temp
    )
    console.log(temps);
    const cityName = cityData.city.name;
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Sparklines height={120}
            width={180}
            data={temps}>
            <SparklinesLine color='red' />
          </Sparklines>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>
                City
              </th>
              <th>
                Temperature
              </th>
              <th>
                Pressure
              </th>
              <th>
                Humidity
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather } // same as {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);