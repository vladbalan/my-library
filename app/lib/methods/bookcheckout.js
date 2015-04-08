Meteor.methods({
    bookCheckout: function (bookId, checkin) {
        // Set properties
        var set = {
            checkoutUserId: (checkin) ? false : Meteor.user()._id
            , dateCheckout: (checkin) ? false : new Date()
        };

        // Update book
        Books.update(bookId, {$set: set}, function(error) {
            if (error) {
                // display the error to the user
                throw new Meteor.Error('invalid-book', error.reason);
            } else {
                return true;
            }
        });
        
        // If book is checked back in, remove any notifications
        if (checkin) {
            Notifications.remove({
                bookId: bookId
            });
        }
    }
});