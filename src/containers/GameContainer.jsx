import React, {Component} from "react";
import DiceContainer from "./DiceContainer";
import CardContainer from "./CardContainer";

class GameContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      scoreValue: 0
    }
  }

  updateScoreValue(newScore){
    this.setState({scoreValue: newScore});
  }


  render(){

    return (
      <div>
        <DiceContainer handleUpdate={this.updateScoreValue.bind(this)}/>
        <CardContainer scoreValue={this.state.scoreValue}/>
      </div>
    );

  }

}

export default GameContainer;