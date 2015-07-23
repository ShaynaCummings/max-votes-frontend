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

							var k;
							for (k in data) {

								if(data[k].rank === null) {
									data[k].rank = 0;
								}
							}

							angular.copy(data, allIdeas);
						}
					);

					return allIdeas;
				},

				submitIdea: function(idea){

					console.log(idea);

					// $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

					var req = {
						method: 'POST',
				    	url: 'http://max-votes.herokuapp.com/ideas',
				    	data: idea,
				    	headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
				    };

					$http(req).success(function(data) {
					    console.log('success!');
					    console.log(data);
					  });
				}
			};
		}
]);