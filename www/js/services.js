angular.module('todo').service('ToDoRepository', [function() {
	var that = this;

	return {
		list:function(){
			if(!localStorage.todos){
				//Init
				localStorage.todos = "[]";
			}
			return JSON.parse(localStorage.todos);
		},
		store:function(todo){
			var data = JSON.parse(localStorage.todos);
			data.push(todo);
			localStorage.todos = JSON.stringify(data);
		},
		remove:function(index){
			var data = JSON.parse(localStorage.todos);
			data.splice(index, 1)
			localStorage.todos = JSON.stringify(data);
		}
	};
}]);