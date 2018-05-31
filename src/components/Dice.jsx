import React, {Component} from "react";

import dice1 from "../resources/dice1.png";
import dice2 from "../resources/dice2.png";
import dice3 from "../resources/dice3.png";
import dice4 from "../resources/dice4.png";
import dice5 from "../resources/dice5.png";
import dice6 from "../resources/dice6.png";

import "../styles/components.css"

class Dice extends Component {

  constructor(props){
    super(props);
  }


  getImageSource(){
    switch (this.props.value) {
      case 1:
        return dice1
      case 2:
        return dice2
      case 3:
        return dice3
      case 4:
        return dice4
      case 5:
        return dice5
      case 6:
        return dice6
      default:
        return dice1
    }
  }


  render(){
    const p = this.props;

    const imageSource = this.getImageSource();

    const classList = p.held ? "dice held" : "dice";

    return(
      <div className={classList} onClick={p.handleClick.bind(this)}>
        <img src={imageSource} alt="dice"/>
      </div>
    );
  }

}

export default Dice;