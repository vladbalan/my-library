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

// Validation helpers
var getField = function (field, templateName) {
    return Session.get(templateName + 'Validator')[field];
}

Handlebars.registerHelper('errorMessage', function(field, templateName) {
    return getField(field, templateName);
});

Handlebars.registerHelper('errorClass', function(field, templateName) {
    return !!getField(field, templateName) ? 'has-error' : '';
});

// Enable and disable element
enableElement = function (selector) {
    $(selector).removeClass('disabled').removeAttr('disabled');
}

disableElement = function (selector) {
    $(selector).addClass('disabled').attr('disabled', true);
}