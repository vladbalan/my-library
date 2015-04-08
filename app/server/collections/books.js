// Before insert hooks
Books.before.insert(function (userId, doc) {
    doc.userId = userId;
    doc.checkoutUserId = false;
    doc.overdue = false;
    doc.isPrivate = false;
    doc.dateCreated = new Date();
    doc.dateModified = new Date();
});

// Before update hooks
Books.before.update(function (userId, doc, fieldNames, modifier, options) {
    modifier.$set = modifier.$set || {};
    modifier.$set.dateModified = new Date();
    modifier.$set.checkoutUserId = userId;
});

// After insert hooks
Books.after.insert(function (userId, doc) {
    AuditLogs.insert({
        userId: userId
        , bookId: doc._id
        , action: 'insert'
        , date: new Date()
    });
});

// After update hooks
Books.after.update(function (userId, doc, fieldNames, modifier, options) {
    AuditLogs.insert({
        userId: userId
        , bookId: doc._id
        , action: 'update'
        , date: new Date()
    });
});

// After remove hooks
Books.after.remove(function (userId, doc) {
    AuditLogs.insert({
        userId: userId
        , bookId: doc._id
        , action: 'remove'
        , date: new Date()
    });
});