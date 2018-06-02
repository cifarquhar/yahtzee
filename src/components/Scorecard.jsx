import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const s = this.props.scoring;
    const c = this.props.player.currentScores

    console.log(c);

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
            <td className="score" onClick={() => { if (c.aces === null) c.aces = s.aces }}>{c.aces ? c.aces : (s.aces ? s.aces : "X")}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td className="score" onClick={() => { if (c.twos === null) c.twos = s.twos }}>{c.twos ? c.twos : (s.twos ? s.twos : "X")}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td className="score" onClick={() => { if (c.threes === null) c.threes = s.threes }}>{c.threes ? c.threes : (s.threes ? s.threes : "X")}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td className="score" onClick={() => { if (c.fours === null) c.fours = s.fours }}>{c.fours ? c.fours : (s.fours ? s.fours : "X")}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td className="score" onClick={() => { if (c.fives === null) c.fives = s.fives }}>{c.fives ? c.fives : (s.fives ? s.fives : "X")}</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td className="score" onClick={() => { if (c.sixes === null) c.sixes = s.sixes }}>{c.sixes ? c.sixes : (s.sixes ? s.sixes : "X")}</td>
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
            <td className="score" onClick={() => { if (c.threeKind === null) c.threeKind = s.threeKind }}>{c.threeKind ? c.threeKind : (s.threeKind ? s.threeKind : "X")}</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td className="score" onClick={() => { if (c.fourKind === null) c.fourKind = s.fourKind }}>{c.fourKind ? c.fourKind : (s.fourKind ? s.fourKind : "X")}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td className="score" onClick={() => { if (c.house === null) c.house = s.house }}>{c.house ? c.house : (s.house ? s.house : "X")}</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td className="score" onClick={() => { if (c.low === null) c.low = s.low }}>{c.low ? c.low : (s.low ? s.low : "X")}</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td className="score" onClick={() => { if (c.high === null) c.high = s.high }}>{c.high ? c.high : (s.high ? s.high : "X")}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td className="score" onClick={() => { if (c.yahtzee === null) c.yahtzee = s.yahtzee }}>{c.yahtzee ? c.yahtzee : (s.yahtzee ? s.yahtzee : "X")}</td>
          </tr>
          <tr>
            <td>Chance</td>
            <td className="score" onClick={() => { if (c.chance === null) c.chance = s.chance }}>{c.chance ? c.chance : (s.chance ? s.chance : "X")}</td>
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