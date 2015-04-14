Meteor.publish('checkouts', function() {
    return Checkouts.find();
});