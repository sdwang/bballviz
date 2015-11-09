//Creates a key-value playerDatabase where player names are matched
//to their playerID
var allPlayers = require('./all-players');

var players = allPlayers.resultSets[0].rowSet;

var nameParser = function(name) {
  //Takes a string in the format of:
  //"lastname, firstname"
  //example:  "Curry, Stephen"
  //Returns "Stephen Curry"
  var nameSplit = name.split(', ');
  return nameSplit[1] + ' ' + nameSplit[0];
};

var playerDatabase = {};

for(var i = 0; i < players.length; i++) {
  playerDatabase[nameParser(players[i][1])] = players[i][0];
}

module.exports = playerDatabase;

console.log(playerDatabase);
