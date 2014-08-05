'use strict';

      // console.log(window.innerHeight);
      // resizeTo(320,window.innerHeight);

angular.module('metroHomepageApp')
  .controller('MainCtrl', function ($scope) {

    //android-explode
    $('div#explode-tile').click(function(e){

      //android
      var grid = $('<div>').addClass('col-md-12 col-sm-12 col-xs-12');
      var row = $('<div>').addClass('row,android-row');
      var icon = $('<div>').addClass('android-icon');
      var androidImg = $('<img>').attr({src:'images/Android_icon.png'});
      var androidComment = $('<h1>').text('set me free!').addClass('android-comment');

      $('.tile,.header').animate({
        opacity: 0,
      },{
        duration: 800,
        step:function(now){
          $(this).css({transform:'scale('+now+')'});
        },
        complete:function(){
          $(this).css('display', 'none');
          $('body').animate({
            backgroundColor: '#9fdfcc'
          },{
            complete: function(){
              $('.container').append($(row).append($(grid).append($(icon).append(androidImg).append(androidComment))));
              $('.android-icon img').animate({'margin-top':'30px'},1500,"easeOutBounce");
            }
          });
        }
      });
    });
  });

          // $('.android-icon').animate({top:'150px'},1500,"easeOutBounce",function(){
          //   $('#android-comment').animate({opacity:1,duration:1500,delay:700});
          //   // $('.android-icon').mouseover(function(){
          //   // });
      //     });