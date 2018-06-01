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

    this.dieValues = [1,2,3,4,5,6];
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

  checkNofKind(dice){
    let dieValues = [1,2,3,4,5,6];

    let checks = {
      two: false,
      three: false,
      four: false,
      five: false
    };

    dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 5)) {
        checks.five = true;
      };
    });

    dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 4)) {
        checks.four = true;
      };
    });

    dieValues.forEach((value, index) => {
      if (this.checkValueOccurence(dice, value, 3)) {
        checks.three = true;
        dieValues.splice(index,1);
      }
    })

    dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 2)) {
        checks.two = true;
      };
    });

    return checks;
  }


  updateScoreValue(newScore, dice){

    const checks = this.checkNofKind(dice);

    const diceTotal = this.sumAllDice(dice);

    this.setState({holderValue: newScore, 
    scoring: {
      aces: this.sumGivenValues(dice, 1),
      twos: this.sumGivenValues(dice, 2),
      threes: this.sumGivenValues(dice, 3),
      fours: this.sumGivenValues(dice, 4),
      fives: this.sumGivenValues(dice, 5),
      sixes: this.sumGivenValues(dice, 6),
      threeKind: checks.three ? diceTotal : 0,
      fourKind: checks.four ? diceTotal : 0,
      house: checks.two && checks.three ? 25 : 0,
      yahtzee: checks.five ? 50 : 0,
      chance: diceTotal  
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