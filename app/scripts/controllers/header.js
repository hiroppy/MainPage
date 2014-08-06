'use strict';

google.load("feeds", "1");

angular.module('metroHomepageApp')
  .controller('HeaderCtrl', function ($scope) {
    //blog notification

    var feedurl = "http://d.hatena.ne.jp/about_hiroppy/rss";
    var feed = new google.feeds.Feed(feedurl);
    feed.load(function (result){
      if (!result.error){
        for(var i=0;i<result.feed.entries.length;i++){
          if(result.feed.entries[i].title === 'サイト') continue;
          $('.ticker ul').append('<li><p>'+result.feed.entries[i].title+'</p></li>');
        }
      }
      else{
        $(".ticker ul").append("<li><p>error</p></li>");
      }
    });
    setTimeout(function(){
      $('.ticker').ticker(
        {
          itemSpeed:     3500,
          cursorSpeed:   70,
          pauseOnHover:  false,
          finishOnHover: false,
          cursorOne:     '_',
          cursorTwo:     '-',
          fade:          true,
          fadeInSpeed:   600,
          fadeOutSpeed:  300
        });
    },1200);
  });