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
			$scope.allIdeas = IdeaFactory.getAllIdeas();

			$scope.addIdea = function(){
				if(!$scope.name || $scope.name === '') { return; }
				$scope.ideas.push({
					name: $scope.name, 
					tags: $scope.tags,
					upvotes: 0,
					comments: [
    					{author: 'Joe', body: 'Cool post!', upvotes: 0},
    					{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  					]
				});
				$scope.name = '';
			};

			$scope.voteForIdea = function(idea) {
				idea.upvotes += 1;
			};
		}
]);
