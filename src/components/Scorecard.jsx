import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const s = this.props.scoring;

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
            <td>{s.aces ? s.aces : "X"}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td>{s.twos ? s.twos : "X"}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td>{s.threes ? s.threes : "X"}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td>{s.fours ? s.fours : "X"}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td>{s.fives ? s.fives : "X"}</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td>{s.sixes ? s.sixes : "X"}</td>
          </tr>
          <tr>
            <th>Bonus</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Upper Section Total</th>
            <td>TODO</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <th>Lower Section</th>
          </tr>
          <tr>
            <td>Three-of-a-kind</td>
            <td>{s.threeKind ? s.threeKind : "X"}</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td>{s.fourKind ? s.fourKind : "X"}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td>{s.house ? s.house : "X"}</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td>{s.low ? s.low : "X"}</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td>{s.high ? s.high : "X"}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td>{s.yahtzee ? s.yahtzee : "X"}</td>
          </tr>
          <tr>
            <td>Chance</td>
              <td>{s.chance ? s.chance : "X"}</td>
          </tr>
          <tr>
            <th>Yahtzee Bonus</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Lower Section Total</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>TODO</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Scorecard;