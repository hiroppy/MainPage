'use strict';

/**
 * @ngdoc function
 * @name metroHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the metroHomepageApp
 */
angular.module('metroHomepageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
