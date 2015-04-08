Meteor.publish('auditLogs', function(userId) {
    return AuditLogs.find({userId: userId});
});