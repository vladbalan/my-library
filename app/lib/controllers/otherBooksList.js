OtherBooksListController = BooksListController.extend({
	waitOn: function() {
    	if (!! Meteor.user()) {
			return Meteor.subscribe('otherBooks', Meteor.user()._id)
		}
	}
});