Meteor.methods({
	bookInsert: function (doc) {
		// Check for errors
		var validator = validateBook(doc);
		if (validator.title) {
			throw new Meteor.Error('invalid-book', validator.title);
		}
		if (validator.author) {
			throw new Meteor.Error('invalid-book', validator.author);
		}

		// Before insert hooks
		var user = Meteor.user();
		Books.before.insert(function (userId, doc) {
			doc.userId = user._id;
			doc.checkoutUserId = false;
			doc.overdue = false;
			doc.isPrivate = false;
			doc.dateCreated = new Date();
			doc.dateModified = new Date();
		});

		// Insert document into collection
		var bookId = Books.insert(doc);

		return {
			_id: bookId
		};
	}
});