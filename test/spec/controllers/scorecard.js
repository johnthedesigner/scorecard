'use strict';

describe('Controller: ScorecardCtrl', function () {

  // load the controller's module
  beforeEach(module('scorecardApp'));

  var ScorecardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScorecardCtrl = $controller('ScorecardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
