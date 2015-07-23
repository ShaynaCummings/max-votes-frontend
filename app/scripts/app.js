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
        templateUrl: 'views/topvotes.html',
        controller: 'TopVotesCtrl'
      });

    $stateProvider
      .state('/newposts', {
        url: '/newposts',
        templateUrl: 'views/newposts.html',
        controller: 'NewPostsCtrl'
      });

    $stateProvider
      .state('/explore', {
        url: '/explore',
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      });

    $urlRouterProvider.otherwise('/');
}]);