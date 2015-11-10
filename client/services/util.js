angular.module('bballApp.util', [])

.factory('Utility', function($http) {

  var getShotChartData = function(playerID, year) {
    console.log('getting to utility')
    return $http({
      method: 'GET',
      // url: 'http://stats.nba.com/stats/playerdashboardbyshootingsplits?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID='
      //       + playerID + '&PlusMinus=N&Rank=N&Season='
      //       + year + '&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision='
      url: '/test'
    }).then(function(resp) {
      console.log(resp.data);
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
    getShotChartData: getShotChartData
  };
});
