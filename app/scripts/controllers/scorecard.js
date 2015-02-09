'use strict';

/**
 * @ngdoc function
 * @name scorecardApp.controller:ScorecardCtrl
 * @description
 * # ScorecardCtrl
 * Controller of the scorecardApp
 */
angular.module('scorecardApp')
  .controller('ScorecardCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/data.json').success(function(data) {
      $scope.table = data;
      $scope.tableWidth = data.columnNames.length;
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
  }]);
