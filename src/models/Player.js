class Player {

  constructor(name){
    this.name = name;
    this.totalScore = null;
    this.currentScores = {
      aces: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      threeKind: null,
      fourKind: null,
      house: null,
      low: null,
      high: null,
      yahtzee: null,
      chance: null,
      bonus: null,
      upperTotal: null,
      lowerTotal: null,
      gameTotal: null
    }
  }

  calculateBonus(){
    const c = this.currentScores;
    const singlesTotal = c.aces + c.twos + c.threes + c.fours + c.fives + c.sixes;

    singlesTotal >= 63 ? c.bonus = 35 : c.bonus = 0;
  }

  calculateUpperTotal(){
    const c = this.currentScores;
    c.upperTotal = c.aces + c.twos + c.threes + c.fours + c.fives + c.sixes + c.bonus;
  }

  calculateLowerTotal(){
    const c = this.currentScores;
    c.lowerTotal = c.threeKind + c.fourKind + c.house + c.low + c.high + c.yahtzee + c.chance;
  }

  calculateGameTotal(){
    const c = this.currentScores;
    c.gameTotal = c.upperTotal + c.lowerTotal;
  }

  resetScores(){
    this.currentScores = {
      aces: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      threeKind: null,
      fourKind: null,
      house: null,
      low: null,
      high: null,
      yahtzee: null,
      chance: null,
      bonus: null,
      upperTotal: null,
      lowerTotal: null,
      gameTotal: null
    };
  }

}

export default Player;