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

        // Insert document into collection
        var bookId = Books.insert(doc);

        return {
            _id: bookId
        };
    }
});