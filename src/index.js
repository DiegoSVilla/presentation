//browserify -t browserify-css index.js -o bundle.js -t [ C:\Users\Avellan\AppData\Roaming\npm\node_modules\babelify --presets [ es2015 react ] ]

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import App from './App';
import AboutMe from './body/AboutMe';
import Curriculum from './body/Curriculum';
import Timeline from './body/Timeline';
import './css/index.css';

ReactDOM.render(
 <Router history={hashHistory}>
 	<Route path="/" component={App}>
 		<IndexRoute component={AboutMe} />
 		<Route path="curriculum" component={Curriculum} />
 		<Route path="timeline" component={Timeline} />
 	</Route>
 </Router>, 
document.getElementById('root'));

