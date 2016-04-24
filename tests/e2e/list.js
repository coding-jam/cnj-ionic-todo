describe('list', function() {
    it('should start on list page', function() {
  		browser.getCurrentUrl().then(function(actualUrl) {
  			expect(actualUrl.substring(actualUrl.lastIndexOf('#') + 1)).toBe('/list');
  		});
  	});

    it('should have a "New Todo" anchor', function() {
        var newTodo = element(by.css('a[ui-sref="detail"]'));

        browser.isElementPresent(newTodo).then(function(result) {
          expect(result).toEqual(true);
        });
  	});

    it('should start with a placeholder ion-item', function() {
        var list = element.all(by.css('ion-item'));
        expect(list.count()).toBe(1);
  	});
});
