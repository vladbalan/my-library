Meteor.methods({
    bookOverdue: function (bookId) {
        // Set properties
        var set = {
            overdue: true
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
        
    }
});