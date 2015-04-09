Meteor.methods({
    notifyOverdue: function (doc) {
        Notifications.upsert({
            docId: doc._id
        }
        , {
            userId: doc.checkoutUserId
            , docId: doc._id
            , text: 'The book <strong>"' + doc.title + '"</strong> <em>by ' + doc.author + '</em> is overdue!'
            , read: false
        });

        return true;
    }
});