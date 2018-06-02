import React, { Component } from 'react';
import GameContainer from "./containers/GameContainer";
import './styles/App.css';
import Player from './models/Player';

const player1 = new Player("P1");

class App extends Component {
  render() {
    return (
      <GameContainer player={player1}/>
    );
  }
}

export default App;
