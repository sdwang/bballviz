var app = angular.module('bballApp', [
  'bballApp.shotChart',
  'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('shotChart', {
    url: '/shotChart',
    templateUrl: 'shotChart/shotChart.html',
    controller: 'ShotChartController'
  });
});
