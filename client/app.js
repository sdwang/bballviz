var app = angular.module('bballApp', [
  'bballApp.shotChart',
  'ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateURL: 'shotChart/shotChart.html',
      controller: 'ShotChartController'
    })
    .when('/shotChart', {
      templateURL: 'shotChart/shotChart.html',
      controller: 'ShotChartController'
    })
})

.run(function($rootScope) {

})
