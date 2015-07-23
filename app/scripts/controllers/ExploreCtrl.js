'use strict';

/**
 * @ngdoc function
 * @name maxVotes.controller:ExploreCtrl
 * @description
 * # Explore
 * Controller of the maxVotes
 */
angular.module('maxVotes')
	.controller('ExploreCtrl', [
		'$scope',
		function($scope){
			$scope.name = 'Explore';
		}
]);