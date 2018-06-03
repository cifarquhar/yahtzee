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

  buildContent(){
    const c = this.props.player.currentScores;
    const s = this.props.scoring;

    const categories = ["aces","twos","threes","fours","fives","sixes","threeKind","fourKind","house","low","high","yahtzee","chance","bonus","upperTotal","lowerTotal","gameTotal"];

    let tableRows = {
      classes: {},
      content: {}
    };
    
    categories.forEach(category => {
      if (c[category] !== null) {
        tableRows.classes[category] = "score filled";
      }
      else {
        tableRows.classes[category] = "score";
      }
      c[category] ? tableRows.content[category] = c[category] : (s[category] ? tableRows.content[category] = s[category] : tableRows.content[category] = "X");
    });

    return tableRows;
  }

  render(){
    const tableRows = this.buildContent();

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
            <td className={tableRows.classes.aces} onClick={() => this.handleClick("aces")}>{tableRows.content.aces}</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td className={tableRows.classes.twos} onClick={() => this.handleClick("twos")}>{tableRows.content.twos}</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td className={tableRows.classes.threes} onClick={() => this.handleClick("threes")}>{tableRows.content.threes}</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td className={tableRows.classes.fours} onClick={() => this.handleClick("fours")}>{tableRows.content.fours}</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td className={tableRows.classes.fives} onClick={() => this.handleClick("fives")}>{tableRows.content.fives}</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td className={tableRows.classes.sixes} onClick={() => this.handleClick("sixes")}>{tableRows.content.sixes}</td>
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
            <td className={tableRows.classes.threeKind} onClick={() => this.handleClick("threeKind")}>{tableRows.content.threeKind}</td>
          </tr>
          <tr>
            <td>Four-of-a-kind</td>
            <td className={tableRows.classes.fourKind} onClick={() => this.handleClick("fourKind")}>{tableRows.content.fourKind}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td className={tableRows.classes.house} onClick={() => this.handleClick("house")}>{tableRows.content.house}</td>
          </tr>
          <tr>
            <td>Low Straight</td>
            <td className={tableRows.classes.low} onClick={() => this.handleClick("low")}>{tableRows.content.low}</td>
          </tr>
          <tr>
            <td>High Straight</td>
            <td className={tableRows.classes.high} onClick={() => this.handleClick("high")}>{tableRows.content.high}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td className={tableRows.classes.yahtzee} onClick={() => this.handleClick("yahtzee")}>{tableRows.content.yahtzee}</td>
          </tr>
          <tr>
            <td>Chance</td>
            <td className={tableRows.classes.chance} onClick={() => this.handleClick("chance")}>{tableRows.content.chance}</td>
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