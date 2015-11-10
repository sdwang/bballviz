angular.module('bballApp.shotChart', [])

.controller('ShotChartController', ['$scope', 'Utility', function($scope, Utility) {
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
        // title: {
        //     text: 'Height Versus Weight of 507 Individuals by Gender'
        // },
        // subtitle: {
        //     text: 'Source: Heinz  2003'
        // },
        // xAxis: {
        //     title: {
        //         enabled: true,
        //         text: 'Height (cm)'
        //     },
        //     startOnTick: true,
        //     endOnTick: true,
        //     showLastLabel: true
        // },
        // yAxis: {
        //     title: {
        //         text: 'Weight (kg)'
        //     }
        // },
        // legend: {
        //     layout: 'vertical',
        //     align: 'left',
        //     verticalAlign: 'top',
        //     x: 100,
        //     y: 70,
        //     floating: true,
        //     backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        //     borderWidth: 1
        // },
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
        series: Utility.series

    });
});



}]);
