// Collection definition
Books = new Mongo.Collection('books');

// Meteor methods defined here will be accessible to both the server and the client, 
// removing the need to define an extra "stub" method on the client. 
// The purpose of this is to induce latency compensation between client and server.
Meteor.methods({
	bookInsert: function (attributes) {
		// Create book document
		var user = Meteor.user();
		var book = _.extend(attributes, {
			userId: user._id
			, checkoutUserId: false
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