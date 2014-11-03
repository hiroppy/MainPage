'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('metroHomepageApp'));

  var MainCtrl,
    location,
    scope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should map routes', function() {
    inject(function($route) {

      var checkPath = function(str){
        console.log(str);
        expect($route.routes['/'+str].templateUrl).toEqual('views/'+str+'.html');
      }
      // main
      expect($route.routes['/'].controller).toBe('MainCtrl');
      expect($route.routes['/'].templateUrl).toEqual('views/main.html');

      // accounts
      checkPath('accounts');
      // blog
      checkPath('blog');
      // environment
      checkPath('environment');
      // game 
      checkPath('game');
      // info
      checkPath('info');
      // iphoneApp
      checkPath('iphoneApp');
      // windowsApp
      checkPath('windowsApp');
      // webApp
      checkPath('webApp');
      // programming
      checkPath('programming');
      // profile
      checkPath('profile');
      // photographs
      checkPath('photographs');
      expect($route.routes['/photographs'].controller).toBe('PhotographsCtrl');
      // activity
      checkPath('activity');
      // slide
      checkPath('slide');

      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
});
