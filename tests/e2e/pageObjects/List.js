var ListPage = {
	newTodo: element(by.css('a[ui-sref="detail"]')),
	list: element.all(by.css('ion-item'))
};

module.exports = ListPage;
