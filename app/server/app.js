// Check if any books are overdue every `interval` seconds
var interval = 5;
Meteor.setInterval(function() {
    Meteor.call('checkOverdue', function(error, result) { if (error) {/* */} });
}, interval * 1000);