Meteor.methods({
    bookOverdue: function (doc) {
        // Set properties
        var set = {
            overdue: true
        };

        // Update book
        Books.update(doc._id, {$set: set}, function(error) {
            if (error) {
                // display the error to the user
                throw new Meteor.Error('invalid-book', error.reason);
            } else {
                // Create notification for this overdue book
                Meteor.call('notifyOverdue', doc, function(error, result) { if (error) {/* */} });
                return true;
            }
        });
        
    }
});