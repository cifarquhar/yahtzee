import React, { Component } from "react";
import Scorecard from "../components/Scorecard";
import "../styles/containers.css";

class CardContainer extends Component {

  render() {

    return (
      <div className="card-container">
        <Scorecard/>
      </div>
    );

  }

}

export default CardContainer;