'use strict';

/**
 * @ngdoc function
 * @name scorecardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scorecardApp
 */
angular.module('scorecardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
