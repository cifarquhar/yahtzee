import React, {Component} from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import HELP from "../constants/Help";

import "../styles/components.css";

class Scorecard extends Component {

  // constructor(props){
  //   super(props)
  // }

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
    const player = this.props.player;

    player.calculateBonus();
    player.calculateUpperTotal();
    player.calculateLowerTotal();
    player.calculateGameTotal();

    const c = this.props.player.currentScores;
    const s = this.props.scoring;

    const categories = ["aces","twos","threes","fours","fives","sixes","threeKind","fourKind","house","low","high","yahtzee","chance"];

    const specialCategories = ["bonus", "upperTotal", "lowerTotal", "gameTotal"];

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
      c[category] !== null ? tableRows.content[category] = c[category] : (s[category] ? tableRows.content[category] = s[category] : tableRows.content[category] = "X");
    });

    specialCategories.forEach(category =>{
      c[category] ? tableRows.content[category] = c[category] : (s[category] ? tableRows.content[category] = s[category] : tableRows.content[category] = "X");
    })

    if (c.aces !== null && c.twos !== null && c.thress !== null && c.fours !== null && c.fives !== null && c.sixes !== null){
      tableRows.classes.bonus = "score filled";
      tableRows.classes.upperTotal = "score filled";
    }
    else {
      tableRows.classes.bonus = "score special";
      tableRows.classes.upperTotal = "score special";
    }

    if (c.threeKind !== null && c.fourKind !== null && c.house !== null && c.low !== null && c.high !== null && c.yahtzee !== null && c.chance !== null){
      tableRows.classes.lowerTotal = "score filled";
    }
    else {
      tableRows.classes.lowerTotal = "score special";
    }

    if (tableRows.classes.upperTotal === "score filled" && tableRows.classes.lowerTotal === "score filled") {
      tableRows.classes.gameTotal = "score filled";
    }
    else {
      tableRows.classes.gameTotal = "score special";
    }

    return tableRows;
  }


  generateOverlays(){
    const categories = ["aces", "twos", "threes", "fours", "fives", "sixes", "threeKind", "fourKind", "house", "low", "high", "yahtzee", "chance", "bonus"];

    let overlays = {};

    categories.forEach(category => {
      overlays[category] = <Popover id={category} title={HELP[category].criteria}>{"Score: " + HELP[category].scoring}</Popover>
    })

    return overlays;
  }

  render(){
    const tableRows = this.buildContent();

    const overlays = this.generateOverlays();

    return(
      <div className="table-container">
        <table>
          <thead></thead>
          <tbody>
          <tr>
            <th>Upper Section</th>
          </tr>
          <tr>
              <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.aces}><td>Aces</td></OverlayTrigger>
            <td className={tableRows.classes.aces} onClick={() => this.handleClick("aces")}>{tableRows.content.aces}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.twos}><td>Twos</td></OverlayTrigger>
            <td className={tableRows.classes.twos} onClick={() => this.handleClick("twos")}>{tableRows.content.twos}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.threes}><td>Threes</td></OverlayTrigger>
            <td className={tableRows.classes.threes} onClick={() => this.handleClick("threes")}>{tableRows.content.threes}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.fours}><td>Fours</td></OverlayTrigger>
            <td className={tableRows.classes.fours} onClick={() => this.handleClick("fours")}>{tableRows.content.fours}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.fives}><td>Fives</td></OverlayTrigger>
            <td className={tableRows.classes.fives} onClick={() => this.handleClick("fives")}>{tableRows.content.fives}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.sixes}><td>Sixes</td></OverlayTrigger>
            <td className={tableRows.classes.sixes} onClick={() => this.handleClick("sixes")}>{tableRows.content.sixes}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.bonus}><th>Bonus</th></OverlayTrigger>
            <td className={tableRows.classes.bonus}>{tableRows.content.bonus}</td>
          </tr>
          <tr>
            <th>Upper Section Total</th>
            <td className={tableRows.classes.upperTotal}>{tableRows.content.upperTotal}</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <th>Lower Section</th>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.threeKind}><td>Three-of-a-kind</td></OverlayTrigger>
            <td className={tableRows.classes.threeKind} onClick={() => this.handleClick("threeKind")}>{tableRows.content.threeKind}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.fourKind}><td>Four-of-a-kind</td></OverlayTrigger>
            <td className={tableRows.classes.fourKind} onClick={() => this.handleClick("fourKind")}>{tableRows.content.fourKind}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.house}><td>Full House</td></OverlayTrigger>
            <td className={tableRows.classes.house} onClick={() => this.handleClick("house")}>{tableRows.content.house}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.low}><td>Low Straight</td></OverlayTrigger>
            <td className={tableRows.classes.low} onClick={() => this.handleClick("low")}>{tableRows.content.low}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.high}><td>High Straight</td></OverlayTrigger>
            <td className={tableRows.classes.high} onClick={() => this.handleClick("high")}>{tableRows.content.high}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.yahtzee}><td>Yahtzee</td></OverlayTrigger>
            <td className={tableRows.classes.yahtzee} onClick={() => this.handleClick("yahtzee")}>{tableRows.content.yahtzee}</td>
          </tr>
          <tr>
            <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={overlays.chance}><td>Chance</td></OverlayTrigger>
            <td className={tableRows.classes.chance} onClick={() => this.handleClick("chance")}>{tableRows.content.chance}</td>
          </tr>
          <tr>
            <th>Yahtzee Bonus</th>
            <td>TODO</td>
          </tr>
          <tr>
            <th>Lower Section Total</th>
            <td className={tableRows.classes.lowerTotal}>{tableRows.content.lowerTotal}</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td className={tableRows.classes.gameTotal}>{tableRows.content.gameTotal}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Scorecard;