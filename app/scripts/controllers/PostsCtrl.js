'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the maxVotes
 */
angular.module('maxVotes')
	.controller('PostsCtrl', [
	'$scope',
	function($scope){
		$scope.name = 'test';
	}
]);
