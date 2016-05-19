angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			}
			/*put : function(compeletedData) {
				return $http.put('/api/todos/', completedData);

			}*/
			/*deletes: function(deleteData) {
				return $http.delete('/api/todos', deleteData);
			}*/

		}
	}]);
