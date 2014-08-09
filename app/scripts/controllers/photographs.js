'use strict';

//issues
//https://github.com/abouthiroppy/metroHomePage/issues/6


angular.module('metroHomepageApp')
  .controller('PhotographsCtrl', function ($scope) {
    $('.picture-flame').css('opacity',0);
    // $('.tab-control').tabcontrol({
    //   effect: 'fade' // or 'slide'
    // });
    $.ajax({
      async: true,
      url: 'photographs-images/photo.json',
      type: 'GET',
      dataType: 'json'
    }).done(function(data){
      var imagesPathArray = [];
      for(var i=0;i<data.length;i++){
        data[i].name = data[i].name;
        data[i].thumb = data[i].name.split('.')[0]+"_thumb.jpg"
        imagesPathArray.push(data[i]);
        $('#all').append('<a rel=\"shadowbox\" href=\"photographs-images/'+data[i].name+'\" title=\"'+data[i].title+'\"><img alt=\"'+data[i].title+'\" src=\"photographs-images/'+data[i].thumb+'\" class=\"photo-item\" </a>');
        // if(data[i].type === '0')
        //   $('#object').append('<a rel=\"shadowbox\" href=\"photographs-images/'+data[i].name+'\" title=\"'+data[i].title+'\"><img alt=\"'+data[i].title+'\" src=\"photographs-images/'+data[i].name+'\"></a>');
        // if(data[i].type === '1')
        //   $('#cute').append('<a rel=\"shadowbox\" href=\"photographs-images/'+data[i].name+'\" title=\"'+data[i].title+'\"><img alt=\"'+data[i].title+'\" src=\"photographs-images/'+data[i].name+'\"></a>');
      }
      // console.log(imagesPathArray);
      Shadowbox.init();
    });
    $scope.$on('$viewContentLoaded',function(){
      setTimeout(function(){
        var container = document.querySelector('#all');
        var msnry = new Masonry( container, {
          // columnWidth: 250,
          itemSelector: '.photo-item'
        });
        $('.picture-flame').animate({
          opacity: 1
        })
        // $("#all").justifiedGallery({cssAnimation:true});
        // $("#object").justifiedGallery({cssAnimation:true});
        // $("#cute").justifiedGallery({cssAnimation:true});
      },300);
    });
  });
  // .directive('shadowbox', function() {
  //   console.log('in');
  //   return {
  //     // here you can style the link/thumbnail/etc.
  //     template: '<a ng-click="openShadowbox()">{{imageName}}</a>',
  //     scope: {
  //       imageName: '@name',
  //       imageUrl: '@url'
  //     },
  //     link: function (scope, element, attrs) {
  //       scope.openShadowbox = function () {
  //         Shadowbox.open({
  //           content:    '<div id="welcome-msg">Welcome to my website!</div>',
  //           player:     "html",
  //           title:      "Welcome",
  //           height:     350,
  //           width:      350
  //         });
  //       };
  //     }
  //   }
  // });
