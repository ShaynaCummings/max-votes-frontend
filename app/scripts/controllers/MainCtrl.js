'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:MainCtrl
 * @description
 * # MainCrl
 * Controller of the maxVotes
//  */
// angular.module('maxVotes')
// .controller('MainCtrl', function ($scope, ideas) {
// 	// Populate posts from IdeaFactory
// 	$scope.ideas = ideas.ideas; 

// 	$scope.addIdea = function(){
// 		if(!$scope.name || $scope.name === '') { return; }
// 		$scope.ideas.push({
// 			name: $scope.name, 
// 			tags: $scope.tags,
// 			upvotes: 0
// 		});
// 		$scope.name = '';
// 	};

// 	$scope.voteForIdea = function(idea) {
// 	  idea.upvotes += 1;
// 	};

// });

angular.module('maxVotes')
	.controller('MainCtrl', [
		'$scope',
		'ideas',
		function($scope, ideas){
			// Populate posts from IdeaFactory
			console.log(ideas);
			$scope.ideas = ideas.ideas; 
		}
]);
