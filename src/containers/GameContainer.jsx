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

  mapDieValues(dice){
    let values = dice.map(die => {
      return die.value;
    });
    return values;
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

  straightChecker(dice){
    const values = this.mapDieValues(dice);

    let checks = {
      low: false,
      high: false
    };

    const presence = {
      ace: values.includes(1),
      two: values.includes(2),
      three: values.includes(3),
      four: values.includes(4),
      five: values.includes(5),
      six: values.includes(6),
    }

    if (presence.three && presence.four){
      if (presence.two && presence.five){
        checks.low = true;
        if (presence.ace || presence.six){
          checks.high = true;
        };
      }
      else if ((presence.ace && presence.two) || (presence.five && presence.six)){
        checks.low = true;
      };
    };

    return checks;

  }


  updateScoreValue(newScore, dice){

    const kindChecks = this.checkNofKind(dice);

    const straightChecks = this.straightChecker(dice);

    const diceTotal = this.sumAllDice(dice);

    this.setState({holderValue: newScore, 
    scoring: {
      aces: this.sumGivenValues(dice, 1),
      twos: this.sumGivenValues(dice, 2),
      threes: this.sumGivenValues(dice, 3),
      fours: this.sumGivenValues(dice, 4),
      fives: this.sumGivenValues(dice, 5),
      sixes: this.sumGivenValues(dice, 6),
      threeKind: kindChecks.three ? diceTotal : 0,
      fourKind: kindChecks.four ? diceTotal : 0,
      house: kindChecks.two && kindChecks.three ? 25 : 0,
      low: straightChecks.low ? 30 : 0,
      high: straightChecks.high ? 40 : 0,
      yahtzee: kindChecks.five ? 50 : 0,
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