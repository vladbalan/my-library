// 1. Define global app actions/helpers that need to be available on the client only.
// 2. Meteor.startup tasks that need to happen on the client only.
// 3. Keep track of global (always on) subscriptions on the App.

// App.subscriptions = {
//  // add named subscriptions/handles here
// };

// App.login = function(..., callback){

// };

// App.logout = function(..., callback){

// };

// Meteor.startup(function(){

// });

Handlebars.registerHelper('errorMessage', function(field, templateName) {
    return Session.get(templateName + 'Validator')[field];
});

Handlebars.registerHelper('errorClass', function(field, templateName) {
    return !!Session.get(templateName + 'Validator')[field] ? 'has-error' : '';
});

//Run every minute
Meteor.setInterval(function() {
    Books.find().forEach(function (doc) {
        if (doc.dateCheckout && ! doc.overdue) {
            var dateOverdue = moment(doc.dateCheckout).add(TIME_LIMIT, "seconds").toDate();
            if (moment().isAfter(moment(dateOverdue))) {
                Meteor.call('bookOverdue', doc._id, function(error, result) {
                    if (! error) {
                        Meteor.call('notifyOverdue', doc, function(error, result) { if (error) {/* */} });
                    }
                });
            }
        }
    });
}, 6000);