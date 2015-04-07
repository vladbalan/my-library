// NOTE: App is defined for us in the `core` private package
// 1. Define global app actions that need to be available on the client and server.
// 2. Meteor.startup tasks that need to happen on both the client and server.

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}

