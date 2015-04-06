// Collection definition
Books = new Mongo.Collection('books');

// Configure easySearch
Books.initEasySearch(['title', 'author'], {
    'limit' : 20,
    'use' : 'minimongo'
});

// Validate Book fields
validateBook = function (doc) {
	var validator = {};

	// Validation rules
	if (!doc.title) {
		validator.title = "The book must have a title";
	}
	if (!doc.author) {
		validator.author = "The book must have an author";
	}

	return validator;
}