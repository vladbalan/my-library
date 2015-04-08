Meteor.methods({
    bookCheckout: function (bookId, checkin) {
        // Update book
        checkoutUserId = (checkin) ? false : Meteor.user()._id;
        Books.update(bookId, {$set: {checkoutUserId: checkoutUserId}}, function(error) {
            if (error) {
                // display the error to the user
                throw new Meteor.Error('invalid-book', error.reason);
            } else {
                return true;
            }
        });
        
    }
});