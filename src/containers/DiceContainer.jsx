import React, { Component } from "react";
import {Button} from "react-bootstrap"
import Dice from "../components/Dice";
import "../styles/containers.css";

class DiceContainer extends Component {

  constructor(props){
    super(props)

    this.die1 = {value: 6, held: false};
    this.die2 = {value: 3, held: false};
    this.die3 = {value: 2, held: false};
    this.die4 = {value: 5, held: false};
    this.die5 = {value: null, held: false};

    this.dice = [this.die1, this.die2, this.die3, this.die4, this.die5];

  }

  render() {

    const diceToRender = this.dice.map((array,index) => {
      return(
        <Dice
          key={index}
          value={this.dice[index].value}
          held={this.dice[index].held}
        />
      )
    })

    return (
      <div>
        <div className="dice-container">
          {diceToRender}
        </div>
        <Button block>Roll</Button>
      </div>
    );

  }

}

export default DiceContainer;