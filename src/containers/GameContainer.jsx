import React, {Component} from "react";
import DiceContainer from "./DiceContainer";
import CardContainer from "./CardContainer";

class GameContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      holderValue: 0,
      scoring: {
        aces: null,
        twos: null,
        threes: null,
        fours: null,
        fives: null,
        sixes: null,
        threeKind: null,
        fourKind: null,
        house: null,
        low: null,
        high: null,
        yahtzee: null,
        chance: null,
      }
    }
  }

  sumGivenValues(dice, valueToCheck){
    let runningTotal = 0;
    dice.forEach(die => {
      if (die.value === valueToCheck){
        runningTotal += valueToCheck;
      };
    });
    return runningTotal;
  }


  updateScoreValue(newScore, dice){
    this.setState({holderValue: newScore});

  }


  render(){

    return (
      <div>
        <DiceContainer handleUpdate={this.updateScoreValue.bind(this)}/>
        <CardContainer scoreValue={this.state.holderValue}/>
      </div>
    );

  }

}

export default GameContainer;