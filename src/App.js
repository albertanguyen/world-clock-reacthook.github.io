import React,
        { Component, 
          useState,
          useEffect } from "react";
import * as moment from 'moment';
import City from "./components/city";


function WeatherApp() {
  const [currentTime] = useState(moment());
  const [cities] = useState({'Toronto' : {weatherId: 6167865,
                                          timeZone: 'America/Toronto'
                                        },
                            'Paris': {weatherId: 2988507,
                                      timeZone: 'Europe/Paris'
                                        },
                            'Sydney': {weatherId: 2147714,
                                      timeZone: 'Australia/Sydney'
                                        },
                            'San Mateo': {weatherId: 5391959,
                                        timeZone: 'America/Los_Angeles'
                                        },
                                      })                                   
  useEffect(() => {
    window.setInterval = currentTime/5000;
  });

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

export default WeatherApp;
