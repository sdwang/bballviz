angular.module('bballApp.form', [])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.seasons = [];
  $scope.players = [{id: 123123, name: 'sample player'}];
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
    $scope.selectedPlayer = item.value;
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

  $scope.myDta = [{
      value: "Stephen Curry",
      display: "Stephen Curry"
  }, {
      value: "banana",
      display: "banana"
  }, {
      value: "gauva",
      display: "gauva"
  }, {
      value: "melon",
      display: "melon"
  }, {
      value: "potato",
      display: "potato"
  }, {
      value: "carrot",
      display: "carrot"
  }, {
      value: "cauliflower",
      display: "cauliflower"
  }, {
      value: "jasmine",
      display: "jasmine"
  }, {
      value: "cabbage",
      display: "cabbage"
  }, {
      value: "peas",
      display: "peas"
  }];
  $scope.getMatches = function (text) {
      text = text.toLowerCase();
      var ret = $scope.myDta.filter(function (d) {
          return d.display.startsWith(text);
      });
      return ret;
  }

}]);
