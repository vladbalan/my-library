Meteor.methods({
    bookCheckout: function (bookId) {
        // Update book
        Books.update(bookId, {}, function(error) {
            if (error) {
                // display the error to the user
                throw new Meteor.Error('invalid-book', error.reason);
            } else {
                return true;
            }
        });
        
    }
});