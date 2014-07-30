'use strict';

/**
 * @ngdoc overview
 * @name metroHomepageApp
 * @description
 * # metroHomepageApp
 *
 * Main module of the application.
 */
angular
  .module('metroHomepageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        // controller: 'AccountsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
