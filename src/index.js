import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Intro from './Intro';
import './index.css';

ReactDOM.render(
  <div id="root">
    <Intro/>
    <App />
  </div>,
  document.querySelector('#app')
);