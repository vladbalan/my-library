Meteor.methods({
	bookCheckout: function (bookId) {
		var user = Meteor.user();

		Books.update(bookId, {$set: {checkoutUserId: user._id}}, function(error) {
			if (error) {
				// display the error to the user
				throw new Meteor.Error('invalid-book', error.reason);
			} else {
				return true;
			}
		});
		
	}
});