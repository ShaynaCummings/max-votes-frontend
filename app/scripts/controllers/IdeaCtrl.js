'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:IdeaCtrl
 * @description
 * # IdeaCtrl
 * Controller of the maxVotes
 */
angular.module('maxVotes')
	.controller('IdeaCtrl', [
	'$scope',
	'$stateParams',
	function($scope, $stateParams){
		$scope.id = $stateParams.id;
	}
]);

