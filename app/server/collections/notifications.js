// Before insert hooks
Notifications.before.insert(function (userId, doc) {
    doc.dateCreated = new Date();
});