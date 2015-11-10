angular.module('bballApp.form', [])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.inputHandler = function() {
    var submitElement = angular.element( document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.statType);
    $state.go(this.statType);
    if(this.statType === "shotChart") {
      this.getShotChart(this.getPlayerID(this.player), this.year);
    }
  };

  $scope.getPlayerID = function(player) {
    return Database.playerDatabase[player];
  };

  $scope.getShotChart = function(playerID, year) {
    Utility.getShotChartData(playerID, year);
  };

}]);
