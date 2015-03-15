angular.module('todo').service('ToDoRepository',[function(){
	var that = this;

	this.data = [
		{
			id:0,
			name:'Fare la spesa'
		},
		{
			id:1,
			name:'Stendere il bucato'
		}
	];

	return{
		list:function(){
			return Object.freeze(that.data);
		},
		get:function(id){
			return _.find(that.data,function(todo){
				return todo.id === id;
			});
		}
	};
}]);