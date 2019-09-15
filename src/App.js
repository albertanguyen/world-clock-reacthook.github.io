import React,
        { Component, useState } from "react";
import * as moment from 'moment';
import City from "./components/city";


class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment(),
      cities: {
        'San Mateo': {
          weatherId: 5391959,
          timeZone: 'America/Los_Angeles'
        },
        'Toronto' : {
          weatherId: 6167865,
          timeZone: 'America/Toronto'
        },
        'Paris': {
          weatherId: 2988507,
          timeZone: 'Europe/Paris'
        },
        'Sydney': {
          weatherId: 2147714,
          timeZone: 'Australia/Sydney'
        }
      }
    }
  }
  componentDidMount() {
    window.setInterval(() => this.setState({ currentTime: moment() }), 5000)
  }
  render() {
    const { cities, currentTime } = this.state;
    return (
      <div className="panels">
        {
          Object
            .keys(cities)
            .map(cityName =>
                 <City name={cityName}
                       weatherId = {cities[cityName].weatherId}
                       timeZone = {cities[cityName].timeZone}
                       bgImg = {cities[cityName].bgImg}
                       currentTime = {currentTime}
                       key={cityName}
                 />)
        }
      </div>
    )
  }
}

export default WeatherApp;