angular.module('bballApp.form', [])

.controller('FormController', function($scope) {
  
  $scope.statSelector = function() {
    console.log(this.statType);
    var submitElement = angular.element( document.querySelector('#submit'));
    console.log(submitElement);
    submitElement.attr('ui-sref', this.statType);
  };

});
