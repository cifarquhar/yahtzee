import React, { Component } from "react";
import {Button} from "react-bootstrap"
import Dice from "../components/Dice";
import "../styles/containers.css";

class DiceContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      rollsRemaining: 3
    };

    this.die1 = {value: null, held: false};
    this.die2 = {value: null, held: false};
    this.die3 = {value: null, held: false};
    this.die4 = {value: null, held: false};
    this.die5 = {value: null, held: false};

    this.dice = [this.die1, this.die2, this.die3, this.die4, this.die5];

  }
  
  getDieValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollDice(){
    if (!this.props.scored){

      if (this.state.rollsRemaining){
        this.dice.forEach(die => {
          if (!die.held){
            die.value = this.getDieValue();
          }
        });
        
        this.setState({rollsRemaining: this.state.rollsRemaining - 1}, () => this.props.handleUpdate(this.dice));
      }
    }
  }

  flipHeldState(die){
    if (this.state.rollsRemaining < 3){
      die.held = !die.held;
      this.forceUpdate();
    }
  }

  advanceTurn(){
    this.dice.forEach(die => {
      die.value = null;
      die.held = false;
    });
    this.props.resetScore();
    this.setState({rollsRemaining: 3 }, () => this.props.handleUpdate(this.dice));
  }

  handleReset(){
    this.advanceTurn();
    this.props.resetGame();
  }

  render() {

    const diceToRender = this.dice.map((array,index) => {
      return(
        <Dice
          key={index}
          value={this.dice[index].value}
          held={this.dice[index].held}
          handleClick={() => this.flipHeldState(this.dice[index])}
        />
      )
    })

    return (
      <div>
        <div className="dice-container">
          {diceToRender}
        </div>
        <p>Rolls remaining: {this.state.rollsRemaining}</p>
        <Button onClick={this.rollDice.bind(this)} block>Roll</Button>
        <Button onClick={this.advanceTurn.bind(this)} block>Next Turn</Button>
        <Button onClick={this.handleReset.bind(this)} block>New Game</Button>
      </div>
    );

  }

}

export default DiceContainer;