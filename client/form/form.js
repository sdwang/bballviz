angular.module('bballApp.form', [])

.controller('FormController', function($scope, $state) {
  
  $scope.statSelector = function() {
    var submitElement = angular.element( document.querySelector('#submit'));
    submitElement.attr('ui-sref', this.statType);
    $state.go(this.statType);
  };

});
