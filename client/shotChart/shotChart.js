angular.module('bballApp.shotChart', [])

.controller('ShotChartController', ['$scope', '$http', 'Utility', function($scope, $http, Utility) {
  
  //$scope.series = Utility.series;
  //var missed = Utility.missed;
  // var playerID = Utility.playerID;
  // console.log('playerID:', playerID);
  // var missed = [[143,43],[32,233]];
  //var made = [[-13,342],[-23,-10]];

  var getShotChartData = function(playerID, year) {
    return $http({
      method: 'GET',
      //url: 'http://stats.nba.com/stats/playerdashboardbyshootingsplits?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlayerID=' + playerID + '&PlusMinus=N&Rank=N&Season=' + year + '&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision='
      //url: '/test'
      url: '/shotchartdata/' + playerID + '/' + year
    }).then(function(resp) {
        Utility.parseData(resp.data);
        console.log('Data recieved by client');
        var missed = Utility.missed;
        var made = Utility.made;
        $(function () {
          $('#container').highcharts({
              chart: {
                type: 'scatter',
                zoomType: 'xy',
                backgroundColor: 'transparent'
              },

              xAxis: {
                min: -250,
                max: 250,
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                labels: {
                  enabled: false
                },
                minorTickLength: 0,
                tickLength: 0
              },
              yAxis: {
                min: -20,
                max: 200,
                lineWidth: 0,
                minorGridLineWidth: 0,
                lineColor: 'transparent',
                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0,
                gridLineColor: 'transparent',
                title: {
                 text: '',
                 style: {
                   display: 'none'
                 }
                }
              },
              title: {
                text: '',
                style: {
                    display: 'none'
                }
              },
              subtitle: {
                text: '',
                style: {
                    display: 'none'
                }
              },
              plotOptions: {
                  scatter: {
                      marker: {
                          radius: 5,
                          states: {
                              hover: {
                                  enabled: true,
                                  lineColor: 'rgb(100,100,100)'
                              }
                          }
                      },
                      states: {
                          hover: {
                              marker: {
                                  enabled: false
                              }
                          }
                      },
                      tooltip: {
                          headerFormat: '<b>{series.name}</b><br>',
                          pointFormat: '{point.x} x, {point.y} y'
                      }
                  }
              },
              //series: $scope.series
                series: [{name: 'Shot\'s Missed',
                  color: 'rgba(223, 83, 83, .5)',
                  data: missed
                }, {
                  name: 'Shot\'s Made',
                  color: 'rgba(119, 152, 191, .5)',
                  data: made
                }]
            });
        }); //end of chart
    });
  };

  getShotChartData(Utility.playerID, Utility.year);

  //$('#container').highcharts().addSeries($scope.series);

  //console.log($scope.series);

//  console.log($scope.series[0]);

  //console.log('highcharts series', $('#container').highcharts().series);

  

}]);
