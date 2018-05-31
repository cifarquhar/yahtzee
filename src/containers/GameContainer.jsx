import React, {Component} from "react";
import DiceContainer from "./DiceContainer";
import CardContainer from "./CardContainer";

class GameContainer extends Component {

  render(){

    return (
      <div>
        <DiceContainer/>
        <CardContainer/>
      </div>
    );

  }

}

export default GameContainer;