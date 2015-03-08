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
		}
	};
}]);