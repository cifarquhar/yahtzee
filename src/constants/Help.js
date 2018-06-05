const HELP = {
  aces: {
    criteria: "Roll one or more aces", 
    scoring: "Sum of aces rolled"
  },
  twos: {
    criteria: "Roll one or more twos", 
    scoring: "Sum of twos rolled"
  },
  threes: {
    criteria: "Roll one or more threes", 
    scoring: "Sum of threes rolled"
  },
  fours: {
    criteria: "Roll one or more fours", 
    scoring: "Sum of fours rolled"
  },
  fives: {
    criteria: "Roll one or more fives", 
    scoring: "Sum of fives rolled"
  },
  sixes: {
    criteria: "Roll one or more sixes", 
    scoring: "Sum of sixes rolled"
  },
  threeKind: {
    criteria: "Roll three matching dice", 
    scoring: "Sum of all dice"
  },
  fourKind: {
    criteria: "Roll four matching dice", 
    scoring: "Sum of all dice"
  },
  house: {
    criteria: "Roll three dice of one value and two of another", 
    scoring: "25"
  },
  low: {
    criteria: "Roll four sequential dice", 
    scoring: "30"
  },
  high: {
    criteria: "Roll five sequential dice", 
    scoring: "40"
  },
  yahtzee: {
    criteria: "Roll five matching dice", 
    scoring: "50"
  },
  chance: {
    criteria: "Wildcard", 
    scoring: "Sum of all dice"
  },
  bonus: {
    criteria: "Score 63 or more in the upper section", 
    scoring: "35"
  },
  upperTotal: {
    criteria: "", 
    scoring: ""
  },
  lowerTotal: {
    criteria: "", 
    scoring: ""
  },
  gameTotal: {
    criteria: "", 
    scoring: ""
  }
}

export default HELP;