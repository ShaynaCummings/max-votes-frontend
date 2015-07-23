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
      .state('idea', {
        url: '/ideas/:id',
        templateUrl: 'views/idea.html',
        controller: 'IdeaCtrl'
      });

    $stateProvider
      .state('submit', {
        url: '/submit',
        templateUrl: 'views/submit.html',
        controller: 'SubmitCtrl'
      });

    $stateProvider
      .state('new-ideas', {
        url: '/newideas',
        templateUrl: 'views/ideas-new.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('explore', {
        url: '/exploreideas',
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      });

    $urlRouterProvider.otherwise('/ideas');
}]);