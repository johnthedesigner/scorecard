'use strict';

/**
 * @ngdoc overview
 * @name scorecardApp
 * @description
 * # scorecardApp
 *
 * Main module of the application.
 */
angular
    .module('scorecardApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/scorecard', {
            templateUrl: 'views/scorecard.html',
            controller: 'ScorecardCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    })
    .directive('scrollPaneHeaders', [ function() {

        function link(scope, element) {
            var paneScrollTop,
                paneScrollLeft,
                paneVisibleHeight,
                paneVisibleWidth,
                paneFullHeight,
                paneFullWidth,
                paneScrollBottom,
                paneScrollRight;

            function initScrollPanes(){
                // Get scroll Position
                paneScrollTop = element[0].scrollTop;
                paneScrollLeft = element[0].scrollLeft;
                paneVisibleHeight = element[0].clientHeight;
                paneVisibleWidth = element[0].clientWidth;
                paneFullHeight = element[0].scrollHeight;
                paneFullWidth = element[0].scrollWidth;
                paneScrollBottom = paneFullHeight-paneVisibleHeight-paneScrollTop;
                paneScrollRight = paneFullWidth-paneVisibleWidth-paneScrollLeft;
                
                // Keep header and sidebar in position
                document.getElementById('scorecard-grid-header').style.top = paneScrollTop+'px';
                document.getElementById('table-title').style.left = paneScrollLeft+'px';
                document.getElementById('scorecard-grid-sidebar').style.left = paneScrollLeft+'px';
                
                // Turn on shadows to imply scrollable content, turn off when end of scroll is reached
                if(paneScrollTop === 0){
                    document.getElementById('scroll-shadow-top').style.opacity = 0;
                } else {
                    document.getElementById('scroll-shadow-top').style.opacity = 1;
                }
                if(paneScrollLeft === 0){
                    document.getElementById('scroll-shadow-left').style.opacity = 0;
                } else {
                    document.getElementById('scroll-shadow-left').style.opacity = 1;
                }
                if(paneScrollBottom === 0){
                    document.getElementById('scroll-shadow-bottom').style.opacity = 0;
                } else {
                    document.getElementById('scroll-shadow-bottom').style.opacity = 1;
                }
                if(paneScrollRight === 0){
                    document.getElementById('scroll-shadow-right').style.opacity = 0;
                } else {
                    document.getElementById('scroll-shadow-right').style.opacity = 1;
                }
            }
            element[0].addEventListener('scroll', initScrollPanes);
        }
        return {
            restrict: 'A',
            link: link
        };
    }]);