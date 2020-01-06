import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import TrafficLight from './componentes/trafficLight';



// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';





ReactDOM.render(
< TrafficLight/>,
 document.getElementById('root'));





serviceWorker.unregister();
