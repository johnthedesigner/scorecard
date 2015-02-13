'use strict';

describe('Controller: ReportsSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('scorecardApp'));

  var ReportsSummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportsSummaryCtrl = $controller('ReportsSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
