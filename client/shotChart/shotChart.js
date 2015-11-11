angular.module('bballApp.shotChart', [])

.controller('ShotChartController', ['$scope', '$http', '$state', 'Utility', function($scope, $http, $state, Utility) {

  var getShotChartData = function(playerID, year) {
    return $http({
      method: 'GET',
      url: '/shotchartdata/' + playerID + '/' + year
    }).then(function(resp) {
        Utility.parseData(resp.data);
        console.log('Data recieved by client (ShotChartController)');
        var missed = Utility.missed;
        var made = Utility.made;
        $(function () {
          $('#container').highcharts({
              chart: {
                type: 'scatter',
                zoomType: 'xy',
                backgroundColor: 'transparent',
                //spacingTop: 500,
                width: 1018,
                height: 550,
                // marginTop: 500,
                // marginBottom: 10,
                reflow: false, //Char will not resize with change in window size
                style: {
                  position: 'absolute',
                  bottom: 0
                }
              },

              loading: {
                style: {
                  position: 'absolute',
                  bottom: 0
                }
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
                series: [{name: 'Shot\'s Missed',
                  color: 'rgba(223, 83, 83, .75)',
                  data: missed
                }, {
                  name: 'Shot\'s Made',
                  color: 'rgba(25, 25, 112, .75)',
                  data: made
                }]
            });
        }); //end of chart
    });
  };

  getShotChartData(Utility.playerID, Utility.year);
  

}]);
