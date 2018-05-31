import React, { Component } from "react";
import {Button} from "react-bootstrap"
import Dice from "../components/Dice";
import "../styles/containers.css";

class DiceContainer extends Component {

  render() {

    return (
      <div>
        <div className="dice-container">
          <Dice value={1}/>
          <Dice value={2}/>
          <Dice value={3}/>
          <Dice value={4}/>
          <Dice value={5}/>
        </div>
        <Button block>Roll</Button>
      </div>
    );

  }

}

export default DiceContainer;