var app = angular.module('bballApp', [
  'bballApp.shotChart',
  'bballApp.form',
  'bballApp.database',
  'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('shotChart', {
    url: '/shotChart',
    templateUrl: 'shotChart/shotChart.html',
    controller: 'ShotChartController'
  })
  .state('assistGraph', {
    url: '/assistGraph',
    templateUrl: 'assistGraph/assistGraph.html',
    // controller: 'ShotChartController'
  });
});
