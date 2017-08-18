import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeatMap from './heatmap/heatmap';

const dummyData = 
  [
    {
      count: 1000,
      latitude: '18.180555',
      longitude: '-66.749961'
    },
    {
      count: 2000,
      latitude: '18.361945',
      longitude: '-67.175597'
    }
  ]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Poop on React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="container">
        <HeatMap/>
        </div>
      </div>
    );
  }
}

export default App;
