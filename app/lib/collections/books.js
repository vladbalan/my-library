// Collection definition
Books = new Mongo.Collection('books');

// Configure easySearch
Books.initEasySearch(['title', 'author'], {
    'limit' : 20,
    'use' : 'minimongo'
});

// Validate Book fields
validateBook = function (attributes) {
	var validator = {};

	// Validation rules
	if (!attributes.title) {
		validator.title = "The book must have a title";
	}
	if (!attributes.author) {
		validator.author = "The book must have an author";
	}

	return validator;
}

// Meteor methods defined here will be accessible to both the server and the client, 
// removing the need to define an extra "stub" method on the client. 
// The purpose of this is to induce latency compensation between client and server.
Meteor.methods({
	bookInsert: function (attributes) {
		// Check for errors
		var validator = validateBook(attributes);
		if (validator.title) {
			throw new Meteor.Error('invalid-book', validator.title);
		}
		if (validator.author) {
			throw new Meteor.Error('invalid-book', validator.author);
		}

		// Create book document
		var user = Meteor.user();
		var book = _.extend(attributes, {
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
	}, 
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