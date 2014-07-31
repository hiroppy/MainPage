'use strict';

/**
 * @ngdoc function
 * @name metroHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the metroHomepageApp
 */
angular.module('metroHomepageApp')
  .config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', function ($scope) {

  });
