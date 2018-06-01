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

  checkThreeKind(dice){
    let threeFound = false
    this.dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 3)){
          threeFound = true;
      }
    })
    return threeFound;
  }

  checkFourKind(dice) {
    let fourFound = false
    this.dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 4)) {
        fourFound = true;
      }
    })
    return fourFound;
  }

  checkYahtzee(dice) {
    let yahtzeeFound = false
    this.dieValues.forEach(value => {
      if (this.checkValueOccurence(dice, value, 5)) {
        yahtzeeFound = true;
      }
    })
    return yahtzeeFound;
  }


  updateScoreValue(newScore, dice){

    const threeFound = this.checkThreeKind(dice);
    const fourFound = this.checkFourKind(dice);
    const yahtzeeFound = this.checkYahtzee(dice);

    const diceTotal = this.sumAllDice(dice);

    this.setState({holderValue: newScore, 
    scoring: {
      aces: this.sumGivenValues(dice, 1),
      twos: this.sumGivenValues(dice, 2),
      threes: this.sumGivenValues(dice, 3),
      fours: this.sumGivenValues(dice, 4),
      fives: this.sumGivenValues(dice, 5),
      sixes: this.sumGivenValues(dice, 6),
      threeKind: threeFound ? diceTotal : 0,
      fourKind: fourFound ? diceTotal : 0,
      yahtzee: yahtzeeFound ? 50 : 0,
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