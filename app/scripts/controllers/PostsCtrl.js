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
		$scope.posts = [
		  {title: 'post 1', upvotes: 5},
		  {title: 'post 2', upvotes: 2},
		  {title: 'post 3', upvotes: 15},
		  {title: 'post 4', upvotes: 9},
		  {title: 'post 5', upvotes: 4}
		];
	}
]);
