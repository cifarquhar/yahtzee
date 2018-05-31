import React, { Component } from "react";
import Dice from "../components/Dice";

class DiceContainer extends Component {

  render() {

    return (
      <div>
        <Dice/>
        <Dice/>
        <Dice/>
        <Dice/>
        <Dice/>
      </div>
    );

  }

}

export default DiceContainer;