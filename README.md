# JayBeta - World Clock React Hook
Created with :blue_heart: by <a href="https://www.linkedin.com/in/anh-nguyen2/">Anh</a>  
  
View online at <a href="http://world-clock-example.netlify.com/">here</a>.
  
[//]: # (One or two sentence summary of your project.)

[//]: # (## Video Walkthrough)

[//]: # (Here's a walkthrough of implemented user stories.)

[//]: # (The following **additional** features are implemented:)

[//]: # (* [x] List anything else that you can get done to improve the page!)

## 📘 Lessons Learned
* <a href="https://stackoverflow.com/questions/42241388/how-to-import-global-scss-file-in-a-react-redux-project#42250516" target="_blank">Import scss to react project</a>.
* <a href="https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files" target="_blank">how to locate webpack.config.js</a>
* <a href="https://momentjs.com" target="_blank">Using momentjs</a> and <a href="https://momentjs.com/timezone/docs/#/use-it/" target="_blank">moment-timezone</a>
* <a href="https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-1-7531849d8381" target="_blank">API request with React Hook</a>
* <a href="https://reactjs.org/docs/hooks-effect.html" target="_blank">Instead of thinking of useEffect as mounting and updating, useEffect happens after render. React makes sure the DOM has been updated by the time it runs useEffect. Before, DOM is first rendered by render function, side effects are initiated and executed by componentDidMount and componentDidUpdate. As per my understanding, render function now is the first return from React Function component. After that useEffect will execute other functions to update the DOM.</a>
* The <code></code> getBgGradient (1hook) ~ #1, 
<code>getBgGradient()</code> in <code>useEffect()</code> (2hook) ~ #2 and #3 
<pre>
// In React Hook:
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
</pre>

<pre>
// 2hook: useEffect(() => getBgGradient(currentHour));
</pre>

💡 <i>The main idea of Hook is to reduce the syntax: this.&lt;function name&gt; in #2 and #3, and this.setState in #1, using <code>useEffect()</code> to hook the intitial render (<code>componentDidMount()</code>) and also re-render updated DOM (<code>componentDidUpdate()</code>) by a second render. The fundamental flow/life cycle of Reactjs is still the same.</i>
<pre>
// In normal Reactjs
  1. Update new state (initial state is empty string) for bgGradient ~ Define setGradient function
  setGradient(currentHour) {
      if (currentHour < 3) {
        this.setState({ bgGradient : 'night-2'});
      } else if (currentHour < 6) {
        this.setState({ bgGradient : 'dawn'});
      } else if (currentHour < 9) {
        this.setState({ bgGradient : 'morning'});
      } else if (currentHour < 12) {
        this.setState({ bgGradient : 'afternoon-1'});
      } else if (currentHour < 15) {
        this.setState({ bgGradient : 'afternoon-2'});
      } else if (currentHour < 18) {
        this.setState({ bgGradient : 'evening-1'});
      } else if (currentHour < 21) {
        this.setState({ bgGradient : 'evening-2'});
      } else if (currentHour < 24) {
        this.setState({ bgGradient : 'night-1'});
      }
  }
  2. Mount setGradient
    componentDidMount() {
      this.setGradient(this.state.currentHour);
    }
  3. execute setGradient on DOM ~ componentDidUpdate()
    updateCurrentTime() {
    const { timeZone, currentTime } = this.props;
    this.setGradient(this.state.currentHour);
  }
</pre>

* React Hook with API request: The <code>getWeatherInfo()</code> (1hook) ~ #1, <code>getWeatherInfo()</code> (2hook) ~ #2. There is no <code>componentDidUpdate()</code>.

<pre>
// In normal Reactjs
  1.
  async getWeatherInfo(id) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`).then(res => res.json());
    const weatherInfo = {
      temp: res.main.temp,
      desc: res.weather[0].main,
      icon: `icon-${res.weather[0].icon}`
    };
    this.setState({
      weatherData: weatherInfo
    })
  }
  2.
  componentDidMount() {
    const { weatherId } = this.props;
    this.getWeatherInfo(weatherId);
    this.setGradient(this.state.currentHour);
  }
</pre>

<pre>
// In React Hook:
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
// 2hook: useEffect(() => getWeatherInfo(weatherId))
</pre>

## 🤐 Describe any challenges encountered while building the app.
* <code>To import Sass files, you first need to install node-sass. Run `npm install node-sass` or `yarn add node-sass` inside your workspace.</code>
* <a href="https://stackoverflow.com/questions/51222535/eacces-permission-denied-mkdir-node-modules-node-sass-build-while-running-n" target="_blank">Permission denied while installing node-sass</a>. 
Solution: 
<ol>
<li>First try:</li>
<ul>
<li>Remove node_modules folder, package_log.js</li>
<li><code>npm install</code> </li>
</ul>
<li> <a href="https://stackoverflow.com/questions/49594871/trying-to-install-npm-node-sass" target="_blank">Second try</a></li>
<code>
$ npm install style-loader css-loader autoprefixer-loader sass-loader --save-dev
$ sudo npm install --unsafe-perm node-sass
</code>
</ol>

* Import <a href="https://stackoverflow.com/questions/30620684/importing-moment-timzone-and-moment-range-with-webpack-babel-es6" target="_blank">moment-timezone using ES6 syntax</a>

* <code> Violate React Hook Rules (from Pre-try): <q> React Hook "useWeatherInfo" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks</q>, meaning cannot be called within other functions (ex: useEffect()) inside React functional component, it is only 1 level down from main React Component.</code>
<ol>
<li>First try: In order to get access to response from API request within React component, we can make use of setWeatherData to update weatherData. Instead of parsing weatherId to setWeatherData, we create a customed Hook useWeatherInfo() and parse that function to setWeatherData 
Result: !!!! NO!!! cannot call useWeatherInfo within setWeatherData aka a callback function
</li>
<li>Second try: setWeatherData() within API request (getWeatherInfo()) to udpate weatherData with the response from API request. Then mount getWeatherInfo() within useEffect. After that call keys of object weatherData. ===> crashed Firefox browser due to infinite errors ...
</li>
<li>Third try: Define getWeatherInfo() using async function then put it inside useEffect() call. After that returning updated weatherData by using setWeatherData within functional React Component.

<code>Error: weatherData is null.</code>
</li>
<li>Fourth try: Probably, the proper flow is update the state by using built-in functions <code>set</code> from useState then return the state like normally doing.
</li>
</ol>

❓ Eventually can I use <code>useState()</code> built-in function <code>set</code> within <code>useEffect</code>, updating the state after render? 
💥 Yes, React will re-rendering DOM twice, first by initiating <code>set</code> function inside <code>useEffect()</code> then excute <code>useEffect()</code> after DOM has been updated. This might create infinite loop like I did (see the error message from my below issue). I think we still need to use a separate function for setState by using <code>set</code> function.

* <code> React Hook useEffect contains a call to 'setGradient'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [weatherId, currentHour, currentTime, timeZone] as a second argument to the useEffect Hook  react-hooks/exhaustive-deps. I got this error message after my first try, normally we don't need to provide arguments to useEffect if it is put within React Function component since we can access the state variables right from useEffect.</code>

* <code>window.setInterval is not a function</code>. This is due to this:
<pre>
useEffect(() => {
  window.setInterval(() => setLocalTime(currentTime.tz(timeZone).format("dddd HH:mm"), 00));
});
</pre>

The original code:
<pre>
updateCurrentTime() {
    this.setState({ localTime: currentTime.tz(timeZone).format('dddd HH:mm') });
    };
componentDidMount() {
    window.setInterval(() => this.updateCurrentTime(), 5000);
  };
</pre>
* <code>Unhandled Rejection (TypeError): Cannot read property 'data' of undefined</code>. <br>
Why? <br> <a href="https://stackoverflow.com/questions/56218517/unhandled-rejection-typeerror-cannot-read-property-data-of-undefined">Because get null object in response</a>.<br>
Why?<br> Because of this (message from <code>console.log()</code>): 
<code>"Your account is temporary blocked due to exceeding of requests limitation of your subscription type. Please choose the proper subscription http://openweathermap.org/price"</code> 🤐🤐🤐

## Version 1.0.0
Rewrite to React Hook from <a href="https://reactjsexample.com/world-clock-to-include-the-day-of-the-week-and-the-weather/" target="_blank">this Reactjs example</a>

