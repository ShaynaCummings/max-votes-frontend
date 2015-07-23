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

				getIdea: function(id){
					console.log(id);
				},

				getIdeas: function(){
					var allIdeas = [];

					$http.get('http://max-votes.herokuapp.com/ideas').success(function(data) {
							console.log(data);
							angular.copy(data, allIdeas);
						}
					);

					return allIdeas;
				},

				submitIdea: function(idea){
					console.log(idea);
				}
			};
		}
]);