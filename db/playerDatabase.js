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
var playerList = [];

for(var i = 0; i < players.length; i++) {
  var name = nameParser(players[i][1]);
  playerDatabase[name] = players[i][0];
  var player = {
    name: name,
    id: players[i][0],
    search: name.toLowerCase()
  };
  playerList.push(player);
}

module.exports = {
  playerDatase: playerDatabase,
  playerList: playerList
};

console.log(playerList);
