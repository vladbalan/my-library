AuditLogsController = RouteController.extend({
    template: 'AuditLogs'
    , data: function() {
        return {
            auditLogs: AuditLogs.find()
        };
    }
    , waitOn: function() {
        if (!! Meteor.user()) {
            return Meteor.subscribe('auditLogs', Meteor.user()._id)
        }
    }
});