angular.module('todo').service('ToDoRepository',[function(){
	var that = this;

	this.data = [
		{
			id:0,
			text:'Fare la spesa',
			info:'Mi raccomando il latte',
			done:false
		},
		{
			id:1,
			text:'Stendere il bucato',
			info:'Solo se c\'è il sole',
			done:false
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