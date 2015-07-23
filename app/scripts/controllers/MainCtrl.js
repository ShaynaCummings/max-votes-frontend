'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:MainCtrl
 * @description
 * # MainCrl
 * Controller of the maxVotes
*/
angular.module('maxVotes')
	.controller('MainCtrl', [
		'$scope',
		'IdeaFactory',
		function($scope, IdeaFactory){

			// Populate posts from IdeaFactory
			$scope.allIdeas = IdeaFactory.getIdeas();


			$scope.voteForIdea = function(idea) {
				idea.upvotes += 1;
			};
		}
]);
