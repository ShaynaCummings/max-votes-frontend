'use strict';

/**
 * @ngdoc overview
 * @name maxVotes
 * @description
 * # maxVotes
 *
 * Main module of the application.
 */
angular.module('maxVotes', [
    /*
     * Angular Modules
     */
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    /*
     * 3rd Party Modules
     */
    'ui.router'
])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      });

    $stateProvider
      .state('/topposts', {
        url: '/topposts',
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      });

    $stateProvider
      .state('/explore', {
        url: '/explore',
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      });

    $urlRouterProvider.otherwise('/');
}]);