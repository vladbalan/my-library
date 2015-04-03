Meteor.publish('otherBooks', function(userId) {
  return Books.find({userId: { $ne: userId }});
});