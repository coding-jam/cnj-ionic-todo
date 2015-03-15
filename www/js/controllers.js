angular.module('todo').controller('List', [
	'$scope',
	'ToDoRepository',
	'$ionicPopup',
	function($scope, ToDoRepository, $ionicPopup) {
		$scope.todos = ToDoRepository;

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
])
.controller('Detail', [
	'$scope',
	'ToDoRepository',
	'$state',
	function($scope,ToDoRepository,$state) {

		$scope.todo = {
			text:'',
			info:'',
			done:false
		};

		$scope.save = function(){
			ToDoRepository.push($scope.todo);
			$state.go('list');
		};
	}
]);