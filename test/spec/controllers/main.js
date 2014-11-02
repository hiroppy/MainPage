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

  it('origin path', function() {
    expect(location.path()).toBe('');
  });
});
