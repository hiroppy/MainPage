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
    //link
   $('a').click(function(){
      var url = $(this).attr('href');
      if(url.indexOf("#") != -1) return;
      jumpLink(url);
    });

    $('div').click(function() {
      var id = $(this).attr("id");
      if(id === undefined) return;
      if($("#"+id).find('a').attr('href') === undefined) return;
      jumpLink($("#"+id).find('a').attr('href'));
    });

    $('button').click(function(){
      if($(this).find('a').attr('href') === undefined) return;
      jumpLink($(this).find('a').attr('href'));
    });

    var jumpLink = function(url){
      // console.log(url);
      location.href = url;
      // if(url == "index.html"){
        // $('.body-container').animate({marginRight:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
            // location.href = url;
            // setTimeout(function(){
            //   $('.body-container').css({marginRight:'0',opacity:'0'})
            // },1000);
          // });
      // }
      // else{
        // $('.body-container').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
        //     location.href = url;
            // setTimeout(function(){
            //   $('.body-container').css({marginLeft:'0',opacity:'0'})
            // },1000);
          // });
      // }
    };
  });
