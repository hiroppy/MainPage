'use strict';

angular.module('metroHomepageApp')
  .controller('IndividualTempleteCtrl', function ($scope,$location) {
    $scope.location = $location.path().substr(1);
  });