'use strict';

/**
 * @ngdoc function
 * @name maxVotes.factory:IdeaFactory
 * @description
 * # IdeaFactory
 * Factory in maxVotes
 */
angular.module('maxVotes')
	.factory('idea', [
		'$http',
		function($http){

			return {
				getAllIdeas: function(){
					var ideas = {};

					$http.get('http://max-votes.herokuapp.com/ideas').success(function(data) {
							angular.copy(data, ideas);
						}
					);

					return ideas;
				}
			};
		}
]);