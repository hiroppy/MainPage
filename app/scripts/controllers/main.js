'use strict';

$('.container').css('opacity',0);
$(function(){
  setTimeout(function(){
    $('.container').animate({
      opacity: 1
    },500);
  },200);
});

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
              setTimeout(function(){
                $('.android-icon img').hover(function(){
                  $('body').css('background','black');
                },function(){
                  $('body').css('background','#9fdfcc');
                });
                $('.android-icon img').click(function(){
                  location.reload();
                });
              },2000);
            }
          });
        }
      });
    });
  });