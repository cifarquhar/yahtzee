import React, { Component } from "react";
import Dice from "../components/Dice";
import "../styles/containers.css";

class DiceContainer extends Component {

  render() {

    return (
      <div className="dice-container">
        <Dice value={1}/>
        <Dice value={2}/>
        <Dice value={3}/>
        <Dice value={4}/>
        <Dice value={5}/>
      </div>
    );

  }

}

export default DiceContainer;