'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:SubmitCtrl
 * @description
 * # SubmitCtrl
 * Controller of the maxVotes
*/
angular.module('maxVotes')
	.controller('SubmitCtrl', [
		'$scope',
		'IdeaFactory',
		function($scope, IdeaFactory){


			$scope.submitIdea = function(){
				if(!$scope.title || $scope.title === '') { return; }

				var newIdea = {};
				newIdea.title = $scope.title;
				newIdea.link = $scope.link;
				newIdea.description = $scope.description;
				newIdea.tags = $scope.tags;

				IdeaFactory.submitIdea(newIdea);

				$scope.title = '';
				$scope.link = '';
				$scope.description = '';
				$scope.tags = '';
			};


		}
]);
