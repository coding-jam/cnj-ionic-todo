angular.module('todo').controller('List',[
	'$scope',
	'ToDoRepository',
	function($scope,ToDoRepository){
		$scope.todos = ToDoRepository.list();
	}
]);