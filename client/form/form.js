angular.module('bballApp.form', [])

.controller('FormController', ['$scope', '$state', 'Utility', 'Database', function($scope, $state, Utility, Database) {
  
  $scope.inputHandler = function() {
    var submitElement = angular.element( document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.statType);
    Utility.playerID = this.getPlayerID(this.player);
    Utility.year = this.year;
    $state.go(this.statType);
  };

  $scope.getPlayerID = function(player) {
    return Database.playerDatabase[player];
  };
}]);
