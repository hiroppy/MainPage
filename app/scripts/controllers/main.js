'use strict';

angular.module('metroHomepageApp')
  .controller('MainCtrl', function ($scope) {

    //android-explode
    $('div#explode-tile').click(function(event){
      // console.log(event.target);
      $('.tile').animate({
        opacity: 0
      },1200);
    });
  });
