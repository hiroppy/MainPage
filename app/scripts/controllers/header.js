'use strict';


angular.module('metroHomepageApp')
  .controller('HeaderCtrl', function ($scope) {
    //blog notification
    $('.ticker').ticker();

    // $.ajax({
    //   type: "get",
    //   dataType: 'xml',
    //   crossDomain: true,
    //   url: "http://d.hatena.ne.jp/about_hiroppy/rss",
    //   data: "name=John&location=Boston",
    //   success: function(msg){
    //      alert( "Data Saved: " + msg );
    //   }
    // });
  });