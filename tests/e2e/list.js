var ListPage = require("../../tests/e2e/pageObjects/List.js"); 

describe('list', function() {
    it('should start on list page', function() {
  		browser.getCurrentUrl().then(function(actualUrl) {
  			expect(actualUrl.substring(actualUrl.lastIndexOf('#') + 1)).toBe('/list');
  		});
  	});

    it('should have a "New Todo" anchor', function() {
        browser.isElementPresent(ListPage.newTodo).then(function(result) {
          expect(result).toEqual(true);
        });
  	});

    it('should start with a placeholder ion-item', function() {
        expect(ListPage.list.count()).toBe(1);
  	});
});
