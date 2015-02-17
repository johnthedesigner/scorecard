'use strict';

/**
 * @ngdoc function
 * @name scorecardApp.controller:ReportsSummaryCtrl
 * @description
 * # ReportsSummaryCtrl
 * Controller of the scorecardApp
 */
angular.module('scorecardApp')
  .controller('ReportsSummaryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/summary.json').success(function(data) {
        // Return Table Data
        $scope.table = data;
        $scope.current_segment = data.customer_segments[0];
    });
}]);
