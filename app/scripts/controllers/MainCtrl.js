'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:MainCtrl
 * @description
 * # MainCrl
 * Controller of the maxVotes
 */
angular.module('maxVotes')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomePeople = ['Shayna', 'Laura', 'Carrie', 'Kyle'];
  });
