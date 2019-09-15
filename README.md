# JayBeta - World Clock React Hook
Created with :blue_heart: by <a href="https://www.linkedin.com/in/anh-nguyen2/">Anh</a>  
  
[//]: # (One or two sentence summary of your project.)

[//]: # (## Video Walkthrough)

[//]: # (Here's a walkthrough of implemented user stories.)

[//]: # (The following **additional** features are implemented:)

[//]: # (* [x] List anything else that you can get done to improve the page!)

## Lessons Learned
* <a href="https://stackoverflow.com/questions/42241388/how-to-import-global-scss-file-in-a-react-redux-project#42250516">Import scss to react project</a>.
* <a href="https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files">how to locate webpack.config.js</a>
* <a href="https://momentjs.com">Using momentjs</a> and <a href="https://momentjs.com/timezone/docs/#/use-it/">moment-timezone</a>


## Describe any challenges encountered while building the app.
* <code>To import Sass files, you first need to install node-sass. Run `npm install node-sass` or `yarn add node-sass` inside your workspace.</code>
* <a href="https://stackoverflow.com/questions/51222535/eacces-permission-denied-mkdir-node-modules-node-sass-build-while-running-n">Permission denied while installing node-sass</a>. 
Solution: 
<ol>
<li>First try:</li>
<ul>
<li>Remove node_modules folder, package_log.js</li>
<li><code>npm install</code> </li>
</ul>
<li> <a href="https://stackoverflow.com/questions/49594871/trying-to-install-npm-node-sass">Second try</a></li>
<code>
$ npm install style-loader css-loader autoprefixer-loader sass-loader --save-dev
$ sudo npm install --unsafe-perm node-sass
</code>
</ol>
* Import <a href="https://stackoverflow.com/questions/30620684/importing-moment-timzone-and-moment-range-with-webpack-babel-es6">moment-timezone using ES6 syntax</a>


## Version 1.0.0
Rewrite to React Hook from <a href="https://reactjsexample.com/world-clock-to-include-the-day-of-the-week-and-the-weather/">this Reactjs example</a>

## License

    Copyright 2019 Anh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
