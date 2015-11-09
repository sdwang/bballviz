var app = angular.module('bballApp', [
  'bballApp.shotChart',
  'ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/shotChart', {
      templateURL: 'shotChart/shotChart.html',
      controller: 'ShotChartController'
    }
})

.run(function($rootScope) {

})
