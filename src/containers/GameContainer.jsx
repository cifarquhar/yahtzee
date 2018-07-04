import React, {Component} from "react";
import {Modal, FormControl, FormGroup, Button} from "react-bootstrap";
import DiceContainer from "./DiceContainer";
import CardContainer from "./CardContainer";

class GameContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
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
      },
      scored: false,
      activePlayer: this.props.player,
      showNewGameModal: false
    };

    this.enteredNames = [];
    this.players = [];

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

  markRollScored(){
    this.setState({scored: true});
  }

  resetRollScored(){
    this.setState({scored: false});
  }


  updateScoreValue(dice){

    const kindChecks = this.checkNofKind(dice);

    const straightChecks = this.straightChecker(dice);

    const diceTotal = this.sumAllDice(dice);

    this.setState({ 
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

  resetGameState(){
    this.state.activePlayer.resetScores();
  }

  flipNewGameModalState(){
    this.setState({showNewGameModal: !this.state.showNewGameModal});
  }

  confirmNewGame() {
    if (!this.state.activePlayer) {
      this.flipNewGameModalState();
    }
    else {
      let check = window.confirm("Are you sure you want to start a new game?");
      if (check) {
        this.flipNewGameModalState();
      }
    }
  }

  startNewGame(){
    this.resetGameState();
    this.flipNewGameModalState();
  }


  render(){

    return (
      <div>
        <DiceContainer 
          handleUpdate={this.updateScoreValue.bind(this)} 
          resetScore={this.resetRollScored.bind(this)}
          resetGame={this.confirmNewGame.bind(this)}
          scored={this.state.scored}
        />
        <CardContainer 
          scoring={this.state.scoring} 
          player={this.state.activePlayer}
          scored={this.state.scored}
          setScored={this.markRollScored.bind(this)}
        />

        <Modal
          show={this.state.showNewGameModal}
          onHide={this.flipNewGameModalState}
          container={this}
          animation={false}>
          <Modal.Header>
            <Modal.Title>New Game</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[0] =e.target.value }} placeholder="Player 1" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[1] =e.target.value }} placeholder="Player 2" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[2] =e.target.value }} placeholder="Player 3" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[3] =e.target.value }} placeholder="Player 4" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[4] =e.target.value }} placeholder="Player 5" />
              </FormGroup>
              <FormGroup>
                <FormControl type="text" onChange={(e) => { this.enteredNames[5] =e.target.value }} placeholder="Player 6" />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.startNewGame.bind(this)}>Start Game</Button>
          </Modal.Footer>
        </Modal>



      </div>
    );

  }

}

export default GameContainer;