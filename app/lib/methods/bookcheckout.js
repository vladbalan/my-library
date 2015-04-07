Meteor.methods({
    bookCheckout: function (bookId) {
        // Before update hooks
        Books.before.update(function (userId, doc, fieldNames, modifier, options) {
            modifier.$set = modifier.$set || {};
            modifier.$set.dateModified = new Date();
            modifier.$set.checkoutUserId = userId;
        });

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