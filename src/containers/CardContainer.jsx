import React, { Component } from "react";
import Scorecard from "../components/Scorecard";
import "../styles/containers.css";

class CardContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const p = this.props;

    return (
      <div className="card-container">
        <Scorecard 
          scoring={p.scoring} 
          player={p.player}
          scored={p.scored}
          setScored={p.setScored.bind(this)}
        />
      </div>
    );

  }

}

export default CardContainer;