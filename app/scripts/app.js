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
      .state('ideas', {
        url: '/ideas',
        templateUrl: 'views/ideas.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('ideas.new', {
        url: '/ideas/new',
        templateUrl: 'views/ideas-new.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('ideas.single', {
        url: '/ideas/:id',
        templateUrl: 'views/idea.html',
        controller: 'IdeaCtrl'
      });

    $stateProvider
      .state('/explore', {
        url: '/explore',
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      });

    $urlRouterProvider.otherwise('/ideas');
}]);