MyBooksListController = BooksListController.extend({
	waitOn: function() {
    	if (!! Meteor.user()) {
			return Meteor.subscribe('myBooks', Meteor.user()._id)
		}
	}
});