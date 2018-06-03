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

}

export default Player;