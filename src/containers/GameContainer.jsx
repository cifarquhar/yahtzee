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

  sumAllDice(dice){
    let totalValue = 0;
    dice.forEach(die => {
      totalValue += die.value
    });
    return totalValue;
  }

  checkValueOccurence(dice, valueToCheck, requiredCount){
    let occurences = 0;
    dice.forEach(die => {
      if (die.value === valueToCheck){
        occurences += 1;
      };
    });
    return (occurences >= requiredCount);
  }


  updateScoreValue(newScore, dice){
    this.setState({holderValue: newScore, 
    scoring: {
      aces: this.sumGivenValues(dice, 1),
      twos: this.sumGivenValues(dice, 2),
      threes: this.sumGivenValues(dice, 3),
      fours: this.sumGivenValues(dice, 4),
      fives: this.sumGivenValues(dice, 5),
      sixes: this.sumGivenValues(dice, 6),
      chance: this.sumAllDice(dice)  
    }});

  }


  render(){

    return (
      <div>
        <DiceContainer handleUpdate={this.updateScoreValue.bind(this)}/>
        <CardContainer scoreValue={this.state.holderValue} scoring={this.state.scoring}/>
      </div>
    );

  }

}

export default GameContainer;