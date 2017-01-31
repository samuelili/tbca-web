import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Intro from './Intro';
import './index.css';

ReactDOM.render(
  <div id="root">
      <Intro.Base>
          <h3>We are</h3>
          <Intro.AnimateText title="tbca" interval="376"/>
          <p>Utilizing blockchain technologies to change the world.</p>
      </Intro.Base>
    <App />
  </div>,
  document.querySelector('#app')
);