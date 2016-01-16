angular.module('bballApp.form', [])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.seasons = [];
  $scope.selectedPlayer;

  var currentYear = 1946;

  while(currentYear <= 2015) {
    var season = {};
    var nextYear = currentYear + 1;
    var currentSeason = currentYear.toString() + '-' + nextYear.toString().slice(2);
    season.value = currentSeason;
    season.displayName = currentSeason;
    $scope.seasons.push(season);
    currentYear++;
  }

  $scope.selectedItemChange = function(item) {
    $scope.selectedPlayer = item.name;
  }

  $scope.searchTextChange = function(searchText) {
    $scope.selectedPlayer = searchText;
  }

  $scope.inputHandler = function() {
    var submitElement = angular.element(document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.statType);
    Utility.playerID = this.getPlayerID($scope.selectedPlayer);
    Utility.year = this.year;
    $state.go(this.statType, undefined, {reload: true});
  };

  $scope.getPlayerID = function(player) {
    return Database.playerDatabase[player];
  };

  $scope.getMatches = function (text) {
    if(text !== null) {
      text = text.toLowerCase();
    };
    var ret = Database.playerList.filter(function (d) {
        return d.search.startsWith(text);
    });
    return ret;
  };

}]);
