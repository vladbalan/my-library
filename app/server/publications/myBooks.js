Meteor.publish('myBooks', function(userId) {
    return Books.find({userId: userId});
});