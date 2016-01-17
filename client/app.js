var app = angular.module('bballApp', [
  'bballApp.database',
  'bballApp.util',
  'bballApp.shotChart',
  'bballApp.form',
  'ui.router',
  'ngMaterial',
  'ui.materialize'])

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
  })
  .state('shotChartLoaded', {
    url: '/shotChart/loaded',
    templateURL: 'shotChart/shotChart.html'
  });
});
