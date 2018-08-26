import React, { Component } from 'react';
import './App.css';
import './DATA'; // initial scoreboard data + global var to keep track of ID's

/*
List of components used:

  [] App - stateful
  [x] Header - stateless
  [x] Stats - stateless
  [x] Player - stateless
  [x] Counter - stateless
  [] AddPlayerForm - stateful

 */
class App extends Component {
  render() {
    return (
      <div className="scoreboard">

      </div>
    );
  }
}

export default App;
