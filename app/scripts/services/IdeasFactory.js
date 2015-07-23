'use strict';

/**
 * @ngdoc function
 * @name maxVotes.factory:IdeaFactory
 * @description
 * # IdeaFactory
 * Factory in maxVotes
 */
angular.module('maxVotes')
	.factory('IdeaFactory', [
		'$http',
		function($http){

			return {
				getAllIdeas: function(){
					var allIdeas = [];

					$http.get('http://max-votes.herokuapp.com/ideas').success(function(data) {
							angular.copy(data, allIdeas);
						}
					);

					return allIdeas;
				}
			};
		}
]);