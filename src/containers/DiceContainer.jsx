import React, { Component } from "react";
import Dice from "../components/Dice";

class DiceContainer extends Component {

  render() {

    return (
      <div>
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