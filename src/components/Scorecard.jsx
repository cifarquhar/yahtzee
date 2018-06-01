import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }


  render(){
    const score = this.props.scoreValue;
    const scoring = this.props.scoring;

    return(
      <div>
        <table>
          <thead></thead>
          <tbody>
          <tr>
            <th>Upper Section</th>
          </tr>
          <tr>
            <td>Aces</td>
            <td>{scoring.aces ? scoring.aces : "X"}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td>{scoring.twos ? scoring.twos : "X"}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td>{scoring.threes ? scoring.threes : "X"}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td>{scoring.fours ? scoring.fours : "X"}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td>{scoring.fives ? scoring.fives : "X"}</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td>{scoring.sixes ? scoring.sixes : "X"}</td>
          </tr>
          <tr>
            <th>Bonus</th>
            <td>{score}</td>
          </tr>
          <tr>
            <th>Upper Section Total</th>
            <td>{score}</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <th>Lower Section</th>
          </tr>
          <tr>
            <td>Three-of-a-kind</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Chance</td>
              <td>{scoring.chance ? scoring.chance : "X"}</td>
          </tr>
          <tr>
            <th>Yahtzee Bonus</th>
            <td>{score}</td>
          </tr>
          <tr>
            <th>Lower Section Total</th>
            <td>{score}</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>{score}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Scorecard;