angular.module('bballApp.shotChart', [])

.controller('ShotChartController', ['$scope', 'Utility', function($scope, Utility) {
  
  $scope.series = Utility.series;
  $scope.missed = Utility.missed;
  $scope.made = Utility.made;
 

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
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        //series: $scope.series
          series: [{name: 'Shot\'s Missed',
            color: 'rgba(223, 83, 83, .5)',
            data: $scope.missed
          }, {
            name: 'Shot\'s Made',
            color: 'rgba(119, 152, 191, .5)',
            data: $scope.made
          }]
      });
  });

  //$('#container').highcharts().addSeries($scope.series);

  console.log($scope.series);

//  console.log($scope.series[0]);

  console.log('highcharts series', $('#container').highcharts().series);

  

}]);
