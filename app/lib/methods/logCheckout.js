Meteor.methods({
    logCheckout: function (docId) {
        // Insert document into checkout log
        var checkoutId = Checkouts.insert({
            docId: docId
            , userId: Meteor.user()._id
            , dateCheckout: new Date()
            , duration: null
        });

        return {
            _id: checkoutId
        };
    }
});