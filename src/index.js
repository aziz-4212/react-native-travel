//import react
import React from 'react';

//import react dom
import ReactDOM from 'react-dom';

//import component App
import App from './App';

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

//import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//mapbox gl CSS
import 'mapbox-gl/dist/mapbox-gl.css';

//mapbox gl geocoder CSS
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//mapbox gl geocoder CSS
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//import custom CSS
import './assets/css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);