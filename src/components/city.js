import React,
        { useState,
          useEffect  } from "react";
import * as moment from 'moment';
import "moment-timezone";
import "../assets/scss/_city.scss";

// function useWeatherInfo(req, props) {
//   const [weatherData,setWeatherData] = useState({});
//   const [res, setRes] = useState({
//     data: null,
//     pending: false,
//     completed: false,
//     error: false,
//   });
//   useEffect(() => {
//     setRes({
//       data: false,
//       pending: true,
//       completed: false,
//       error: false,
//     })
//     const getWeatherInfo = async (id) => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`;
//       const res = await fetch(url).then(res => res.json());
//       const weatherInfo = {
//         temp: res.main.temp,
//         desc: res.weather[0].main,
//         icon: `icon-${res.weather[0].icon}`,
//       };
//       const setRes(res.data = weatherInfo)
//   },[]);
//   return res;
// }


function City(props) {
  const [ {name, timeZone, currentTime, bgImg, weatherId} ] = useState(props);
  const [weatherData,setWeatherData] = useState({"icon": "04n",        
                                                  "temp": 14.58,
                                                  "desc": "Clouds",
                                                });
  const [localTime, setLocalTime] = useState(currentTime.tz(timeZone).format('HH:mm dddd'));
  const [currentHour, setCurrentHour] = useState(currentTime.tz(timeZone).format('HH'));
  const [open, setToggleOpen] = useState(false);
  const [bgGradient, setGradient] = useState('');
 
// The getWeatherInfo (1hook) ~ #1o,  getWeatherInfo (2hook) ~ #2o, getWeatherInfo (3hook) ~ #3o
  // 1o.
  // async getWeatherInfo(id) {
  //   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`).then(res => res.json());
  //   const weatherInfo = {
  //     temp: res.main.temp,
  //     desc: res.weather[0].main,
  //     icon: `icon-${res.weather[0].icon}`
  //   };
  //   this.setState({
  //     weatherData: weatherInfo
  //   })
  // }
  // 2o.
  // componentDidMount() {
  //   const { weatherId } = this.props;
  //   this.getWeatherInfo(weatherId);
  //   this.setGradient(this.state.currentHour);
  // }
  // 3o.

// 1hook.
  const getWeatherInfo = async (id) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`
      const res = await fetch(url).then(res => res.json());
      const weatherInfo = { temp: res.main.temp,
                            desc: res.weather[0].main,
                            icon: `icon-${res.weather[0].icon}`,
                          };
      return setWeatherData(weatherInfo);
  }
// 2hook. return ???
// 3hook: useEffect(() => getWeatherInfo(weatherId))


// The 1hook getBgGradient ~ #1o, getBgGradient called in JSX element (2hook) ~ #2o, getBgGradient in useEffect (3hook)~ #3o 
// The main idea of Hook is to reduce the syntax: this.<function> in #2 and #3, and this.setState in #1. 
// The flow/life cycle is still the same
//   1o. Update new state (initial state is empty string) for bgGradient ~ Define setGradient function
//   setGradient(currentHour) {
//       if (currentHour < 3) {
//         this.setState({ bgGradient : 'night-2'});
//       } else if (currentHour < 6) {
//         this.setState({ bgGradient : 'dawn'});
//       } else if (currentHour < 9) {
//         this.setState({ bgGradient : 'morning'});
//       } else if (currentHour < 12) {
//         this.setState({ bgGradient : 'afternoon-1'});
//       } else if (currentHour < 15) {
//         this.setState({ bgGradient : 'afternoon-2'});
//       } else if (currentHour < 18) {
//         this.setState({ bgGradient : 'evening-1'});
//       } else if (currentHour < 21) {
//         this.setState({ bgGradient : 'evening-2'});
//       } else if (currentHour < 24) {
//         this.setState({ bgGradient : 'night-1'});
//       }
//   }
//   2o. Mount setGradient
//     componentDidMount() {
//       this.setGradient(this.state.currentHour);
//     }
//   3o. execute setGradient on DOM ~ componentDidUpdate()
//     updateCurrentTime() {
//     const { timeZone, currentTime } = this.props;
//     this.setGradient(this.state.currentHour);
//   }

// 1hook
  const getBgGradient = (hour) => {
          if (hour < 3) {
            return setGradient('night-2');
        } else if (hour < 6) {
            return setGradient('dawn');
        } else if (hour < 9) {
            return setGradient('morning');
        } else if (hour < 12) {
            return setGradient('afternoon-1');
        } else if (hour < 15) {
            return setGradient('afternoon-2');
        } else if (hour < 18) {
            return setGradient('evening-1');
        } else if (hour < 21) {
            return setGradient('evening-2');
        } else if (hour < 24) {
            return setGradient('night-1');
        };
  }


// 2hook
  // return (
  //   <div
  //     className={`panel ${open ? "open" : ""} ${() => getBgGradient(currentHour)}`}
  //   >
  //   </div>)
// 3hook: useEffect(() => getBgGradient(currentHour));

  useEffect(() => {
    getWeatherInfo(weatherId);
    window.setInterval(() => setLocalTime(currentTime.tz(timeZone).format("dddd HH:mm"), 5000));
    getBgGradient(currentHour);
  });

  return (
    <div
      className={`panel ${open ? "open" : ""} ${() => getBgGradient(currentHour)}`}
      onClick={() => setToggleOpen(!open)}
    >
      <div>
        <h2>{name}</h2>
        <p>{localTime}</p>
      </div>
      <div className="weather-icon">
        <i className={weatherData.icon}></i>
        {weatherData.temp ? (
          <span>
            {" "}
            {weatherData.desc} {weatherData.temp}°C{" "}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );  
}

export default City;