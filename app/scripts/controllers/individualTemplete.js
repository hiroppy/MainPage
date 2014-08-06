'use strict';

angular.module('metroHomepageApp')
  .controller('IndividualTempleteCtrl', function ($scope,$location,$timeout) {
    $scope.location = $location.path().substr(1);

    $('.page-reload').click(function(e){
      location.reload();
    });

    // $scope.request = 0;
    // $scope.response = 0;

    // $timeout(function(){
    //   var timing = performance.timing;
    //   console.log(timing);
    //   // console.log(timing.responseEnd +" "+ timing.responseStart);
    //   // $scope.response = timing.responseEnd - timing.responseStart;
    // },0);
  });