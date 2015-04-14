// Collection definition
Books = new Mongo.Collection('books');

// Collection helpers
Books.helpers({
    checkouts: function() {
        return 0;
    }
    , topCheckoutDuration: function() {
        return 0;
    }
    , totalCheckoutDuration: function() {
        return 0;
    }
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