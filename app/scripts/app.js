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
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
      })
      .when('/environment', {
        templateUrl: 'views/environment.html',
      })
      .when('/info', {
        templateUrl: 'views/info.html',
      })
      .when('/iphoneApp', {
        templateUrl: 'views/iphoneApp.html',
      })
      .when('/windowsApp', {
        templateUrl: 'views/windowsApp.html',
      })
      .when('/webApp', {
        templateUrl: 'views/webApp.html',
      })
      .when('/link', {
        templateUrl: 'views/link.html',
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
    $locationProvider.html5Mode(false);
  }]);