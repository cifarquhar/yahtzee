import React, {Component} from "react";

import "../styles/components.css";

class Scorecard extends Component {

  constructor(props){
    super(props)
  }

  handleClick(category){
    const p = this.props;
    const s = p.scoring;
    const c = p.player.currentScores;

    if (!p.scored){   
      if (c[category] === null){
        c[category] = s[category];
        p.setScored();
      };
    }
  }

  buildClassList(){
    const c = this.props.player.currentScores;

    const categories = ["aces","twos","threes","fours","fives","sixes","threeKind","fourKind","house","low","high","yahtzee","chance","bonus","upperTotal","lowerTotal","gameTotal"];

    let classes = {};

    categories.forEach(category => {
      if (c[category] !== null){
        classes[category] = "score filled";
      }
      else {
        classes[category] = "score";
      }
    })

    return classes;
  }

  render(){
    const s = this.props.scoring;
    const c = this.props.player.currentScores

    const classes = this.buildClassList();

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
            <td className={classes.aces} onClick={() => this.handleClick("aces")}>{c.aces ? c.aces : (s.aces ? s.aces : "X")}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td className={classes.twos} onClick={() => this.handleClick("twos")}>{c.twos ? c.twos : (s.twos ? s.twos : "X")}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td className={classes.threes} onClick={() => this.handleClick("threes")}>{c.threes ? c.threes : (s.threes ? s.threes : "X")}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td className={classes.fours} onClick={() => this.handleClick("fours")}>{c.fours ? c.fours : (s.fours ? s.fours : "X")}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td className={classes.fives} onClick={() => this.handleClick("fives")}>{c.fives ? c.fives : (s.fives ? s.fives : "X")}</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td className={classes.sixes} onClick={() => this.handleClick("sixes")}>{c.sixes ? c.sixes : (s.sixes ? s.sixes : "X")}</td>
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
            <td className={classes.threeKind} onClick={() => this.handleClick("threeKind")}>{c.threeKind ? c.threeKind : (s.threeKind ? s.threeKind : "X")}</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td className={classes.fourKind} onClick={() => this.handleClick("fourKind")}>{c.fourKind ? c.fourKind : (s.fourKind ? s.fourKind : "X")}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td className={classes.house} onClick={() => this.handleClick("house")}>{c.house ? c.house : (s.house ? s.house : "X")}</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td className={classes.low} onClick={() => this.handleClick("low")}>{c.low ? c.low : (s.low ? s.low : "X")}</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td className={classes.high} onClick={() => this.handleClick("high")}>{c.high ? c.high : (s.high ? s.high : "X")}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td className={classes.yahtzee} onClick={() => this.handleClick("yahtzee")}>{c.yahtzee ? c.yahtzee : (s.yahtzee ? s.yahtzee : "X")}</td>
          </tr>
          <tr>
            <td>Chance</td>
            <td className={classes.chance} onClick={() => this.handleClick("chance")}>{c.chance ? c.chance : (s.chance ? s.chance : "X")}</td>
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