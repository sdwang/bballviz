angular.module('bballApp.services', [])

.factory('Form', function($scope) {

  // var statSelector = function() {
  //   console.log($scope.statType);
  //   var submitElement = angular.element( document.querySelector('#submit'));
  //   console.log(submitElement);
  //   submitElement.attr('ui-sref', $scope.statType);
  // };

  return {
    // statSelector: statSelector
  };

})
