'use strict';

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
      .when('/game', {
        templateUrl: 'views/game.html',
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
      .when('/programming', {
        templateUrl: 'views/programming.html',
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
      })
      .when('/photographs', {
        templateUrl: 'views/picture.html',
        controller: 'PhotographsCtrl'
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
      })
      .when('/slide', {
        templateUrl: 'views/slide.html',
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(false);
  }]);