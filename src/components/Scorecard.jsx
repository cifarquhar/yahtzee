import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }


  render(){
    const score = this.props.scoreValue;

    return(
      <div>
        <table>
          <tr>
            <th>Upper Section</th>
          </tr>
          <tr>
            <td>Aces</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td>{score}</td>
          </tr>
          <tr>
            <td>Si{score}es</td>
            <td>{score}</td>
          </tr>
          <tr>
            <th>Upper Section</th>
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
            <td>{score}</td>
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
        </table>
      </div>
    )
  }

}

export default Scorecard;