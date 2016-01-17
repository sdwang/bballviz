angular.module('bballApp.form', [])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.seasons = [];
  $scope.selectedPlayer;
  $scope.select = {};

  var currentYear = 2016;

  while(currentYear > 1946) {
    var season = {};
    var prevYear = currentYear - 1;
    var currentSeason = prevYear.toString() + '-' + currentYear.toString().slice(2);
    season.value = currentSeason;
    season.displayName = currentSeason;
    $scope.seasons.push(season);
    currentYear--;
  }

  $scope.selectedItemChange = function(item) {
    $scope.selectedPlayer = item.name;
    console.log($scope.selectedPlayer);
  }

  $scope.searchTextChange = function(searchText) {
    $scope.selectedPlayer = searchText;
    console.log($scope.selectedPlayer);
  }

  $scope.inputHandler = function() {
    var submitElement = angular.element(document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.select.statType);
    Utility.playerID = this.getPlayerID($scope.selectedPlayer);
    Utility.year = this.select.year;
    console.log(Utility.year);
    $('.loading-gif').removeClass('hidden');
    $state.go(this.select.statType, undefined, {reload: true});
  };

  $scope.getPlayerID = function(player) {
    return Database.playerDatabase[player];
  };

  $scope.getMatches = function (text) {
    if(text !== null) {
      text = text.toLowerCase();
    };
    var matches = Database.playerList.filter(function(player) {
        return player.search.startsWith(text);
    });
    return matches;
  };

}]);
