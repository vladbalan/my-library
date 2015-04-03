Meteor.publish('checkedOutBooks', function(userId) {
  return Books.find({checkoutUserId: userId});
});