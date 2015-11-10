angular.module('bballApp.shotChart', [])

.controller('ShotChartController', ['$scope', 'Utility', function($scope, Utility) {
  
  $scope.series = Utility.series;

  $(function () {
    $('#container').highcharts({
        chart: {
          type: 'scatter',
          zoomType: 'xy',
          backgroundColor: 'transparent'
        },

        xAxis: {
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
        series: $scope.series

      });
  });

  console.log($scope.series);

}]);
