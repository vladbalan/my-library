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

        