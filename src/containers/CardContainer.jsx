import React, { Component } from "react";
import Scorecard from "../components/Scorecard";
import "../styles/containers.css";

class CardContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="card-container">
        <Scorecard scoring={this.props.scoring} player={this.props.player}/>
      </div>
    );

  }

}

export default CardContainer;