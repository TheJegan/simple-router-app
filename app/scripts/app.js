'use strict';

/**
 * @ngdoc overview
 * @name simpleUiRouterApp
 * @description
 * # simpleUiRouterApp
 *
 * Main module of the application.
 */
angular
  .module('simpleUiRouterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {

    $urlRouterProvider.otherwise("/state1");


    // Now set up the states
    $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }


      })
      .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
    });
  });
