angular.module('todo').controller('List', [
	'$scope',
	'ToDoRepository',
	'$ionicPopup',
	function($scope, ToDoRepository, $ionicPopup) {
		$scope.todos = ToDoRepository.list();

		$scope.showConfirm = function(todo) {
			var confirmPopup = $ionicPopup.confirm({
				cancelText: 'Annulla',
				okText: 'Ok',
				title: todo.text,
				template: todo.info
			});

			confirmPopup.then(function(result) {
				todo.done = result;
			});
		};
	}
]);