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
    $scope.ideas = [
		  {name: 'post 1', tags: 'test tag', upvotes: 5},
		  {name: 'post 2', upvotes: 2},
		  {name: 'post 3', upvotes: 15},
		  {name: 'post 4', upvotes: 9},
		  {name: 'post 5', upvotes: 4}
		];

    $scope.addIdea = function(){
    	if(!$scope.name || $scope.name === '') { return; }
		$scope.ideas.push({
			name: $scope.name, 
			tags: $scope.tags,
			upvotes: 0
		});
		$scope.name = '';
	};

	$scope.voteForIdea = function(idea) {
	  idea.upvotes += 1;
	};

  });
