angular.module('todo').controller('List', [
	'$scope',
	'ToDoRepository',
	'$ionicPopup',
	function($scope, ToDoRepository, $ionicPopup) {
		$scope.todos = [];

		$scope.$on('$ionicView.enter',function(){
			$scope.todos = ToDoRepository.list();
		});

		$scope.showConfirm = function(index,todo) {
			var confirmPopup = $ionicPopup.confirm({
				cancelText: 'Annulla',
				okText: 'Fatto!',
				title: todo.text,
				template: todo.info
			});

			confirmPopup.then(function(result) {
				ToDoRepository.remove(index);
				//Refresh
				$scope.todos = ToDoRepository.list();
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
			info:''
		};

		$scope.save = function(){
			ToDoRepository.store($scope.todo);
			$state.go('list');
		};
	}
]);