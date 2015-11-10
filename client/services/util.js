angular.module('bballApp.util', [])

.factory('Utility', function($scope, $http) {

  var getShotChart = function(player, year, statType) {
    return $http({
      method: 'GET',
      url: '/' + playerID + '/' + year + '/' + statType
    }).then(function(resp) {
      return resp.data;
    });
  };

  // var statSelector = function() {
  //   console.log($scope.statType);
  //   var submitElement = angular.element( document.querySelector('#submit'));
  //   console.log(submitElement);
  //   submitElement.attr('ui-sref', $scope.statType);
  // };

  return {
    // statSelector: statSelector
    getShotChart: getShotChart
  };
});
