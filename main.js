const team = {
  _players: [
    {firstName: 'Roger', lastName: 'Federer', age: 41}, 
    {firstName: 'Rafael', lastName: 'Nadal', age: 36},
    {firstName: 'Lionel', lastName: 'Messi', age: 35}
  ],

  _games: [
    {opponent: 'Novak Djokovic', teamPoints: 15, opponentPoints: 0},
    {opponent: 'Tommy Paul', teamPoints: 30, opponentPoints: 0},
    {opponent: 'Cristiano Ronaldo', teamPoints: 1, opponentPoints: 0},
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponnentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Titans', 100, 98);

console.log(team._games);
