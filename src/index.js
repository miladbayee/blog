import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'
import AppState from './context/AppState';


ReactDOM.render(
  <AppState>
    <Router>
      <App />
    </Router>
  </AppState>
  ,
  document.getElementById('root')
);
