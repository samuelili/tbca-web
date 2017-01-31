import React, { Component } from 'react';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
// import './bower_components/jquery/dist/jquery.slim.min.js'
import './App.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="content">
          <h3>We are</h3>
          <h1 id="animate-tbca-title"/>
          <p>Utilizing blockchain technologies to change the world.</p></div>
      </div>
    );
  }
}

export default Intro;