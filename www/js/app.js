angular.module('todo', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider.state('list', {
      url: "/list",
      controller: 'List',
      templateUrl: "templates/list.tpl.html"
    });
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {


    });
  })