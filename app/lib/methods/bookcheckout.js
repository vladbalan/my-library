Meteor.methods({
    bookCheckout: function (doc, checkin) {
        // Set aside the dateCheckout value
        var oldDateCheckout = doc.dateCheckout;

        // Set properties
        var set = {
            checkoutUserId: (checkin) ? false : Meteor.user()._id
            , dateCheckout: (checkin) ? false : new Date()
            , overdue: false
        };

        // Update book
        Books.update(doc._id, {$set: set}, function(error) {
            if (error) {
                // display the error to the user
                throw new Meteor.Error('invalid-book', error.reason);
            } else {
                return true;
            }
        });

        if (! checkin) {
            // Update Checkout log
            Meteor.call('logCheckout', doc._id, function(error, result) { 
                if (! error) {
                    Books.update(doc._id, {
                        $set: {
                            // Set active checkout
                            checkoutId: result._id
                            
                            // Update checkout count
                            , checkouts: Checkouts.find({docId: doc._id}).count()
                        }
                    });
                } 
            });
            
        }
        
        if (checkin) {
            // If book is checked back in, remove any notifications
            Notifications.remove({
                docId: doc._id
            });

            // Log duration since checkout
            var newCheckoutDuration = moment().diff(moment(oldDateCheckout), "seconds"); // Change to days for real world application
            Checkouts.update({_id: doc.checkoutId}, {
                $set: {duration: newCheckoutDuration}
            });
            var topCheckoutDuration = (doc.topCheckoutDuration) ? Math.max(doc.topCheckoutDuration, newCheckoutDuration) : newCheckoutDuration;
            var totalCheckoutDuration = (doc.totalCheckoutDuration) ? doc.totalCheckoutDuration + newCheckoutDuration : newCheckoutDuration;

            Books.update(doc._id, {
                $set: {
                    // clear active checkout
                    checkoutId: null

                    // update book durations
                    , topCheckoutDuration: topCheckoutDuration
                    , totalCheckoutDuration: totalCheckoutDuration
                }
            });
        }
    }
});