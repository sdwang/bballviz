angular.module('bballApp.form', [
  // "$scope",
  // "$state",
  // //"bballApp.database",
  // "bballApp.util"
  // "Utility"
  ])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.inputHandler = function() {
    var submitElement = angular.element( document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.statType);
    $state.go(this.statType);
    console.log(this.getPlayerID(this.player));
    if(this.statType === "shotChart") {
      this.getShotChartData(this.player, this.year);
    }
  };

  $scope.getPlayerID = function(player) {
    return Database.playerDatabase[player];
  };

  $scope.getShotChartData = function(player, year) {
    console.log('getShotChartData')
    console.log(player);
    console.log(year);
  }

}]);
