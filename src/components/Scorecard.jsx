import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <table>
          <tr>
            <th>Upper Section</th>
          </tr>
          <tr>
            <td>Aces</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td>X</td>
          </tr>
          <tr>
            <th>Upper Section</th>
            <td>X</td>
          </tr>
          <tr>
            <th>Upper Section Total</th>
            <td>X</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <th>Lower Section</th>
          </tr>
          <tr>
            <td>Three-of-a-kind</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td>X</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Chance</td>
            <td>X</td>
          </tr>
          <tr>
            <th>Yahtzee Bonus</th>
            <td>X</td>
          </tr>
          <tr>
            <th>Lower Section Total</th>
            <td>X</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>X</td>
          </tr>
        </table>
      </div>
    )
  }

}

export default Scorecard;