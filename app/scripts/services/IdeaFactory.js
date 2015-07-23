'use strict';

/**
 * @ngdoc function
 * @name maxVotes.factory:IdeaFactory
 * @description
 * # IdeaFactory
 * Factory in maxVotes
 */
angular.module('maxVotes')
	.factory('ideas', [
		function(){
			// var ideas = [
			//   {name: 'post 1', tags: 'test tag', upvotes: 5},
			//   {name: 'post 2', upvotes: 2},
			//   {name: 'post 3', upvotes: 15},
			//   {name: 'post 4', upvotes: 9},
			//   {name: 'post 5', upvotes: 4}
			// // ];
	  // 		return ideas;

	  		var o = {
			    ideas: [
			    	{name: 'post 1', tags: 'test tag', upvotes: 5},
					{name: 'post 2', upvotes: 2},
					{name: 'post 3', upvotes: 15},
					{name: 'post 4', upvotes: 9},
					{name: 'post 5', upvotes: 4}
				]
			  };
			  return o;
		}
]);