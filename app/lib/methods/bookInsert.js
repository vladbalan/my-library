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

		// Create book document
		var user = Meteor.user();
		var book = _.extend(doc, {
			userId: user._id
			, checkoutUserId: false
			, overdue: false
			, dateCreated: new Date()
			, dateModified: new Date()
		});

		// Insert document into collection
		var bookId = Books.insert(book);

		return {
			_id: bookId
		};
	}
});