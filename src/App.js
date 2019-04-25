import React, { Component } from 'react';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
import './App.css';
//import Counter from './state/Counter.js';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun bulletInChamber={8} />
      </div>
    );
  }
}

export default App;