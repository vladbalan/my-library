Meteor.methods({
    notifyOverdue: function (doc) {
        Notifications.upsert({
            bookId: doc._id
        }
        , {
            userId: doc.checkoutUserId,
            bookId: doc._id,
            title: doc.title,
            author: doc.author,
            read: false
        });

        return true;
    }
});