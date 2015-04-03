Meteor.publish('otherBooks', function(userId) {
	return Books.find({
		$and: [ 
			{userId: { $ne: userId }}, 
			{
				$or: [
					{$and: [ 
						{checkoutUserId: { $exists: true }}, 
						{checkoutUserId: false} 
					]}, 
					{checkoutUserId: { $exists: false }}
				]
				
			} 
		]
	});
});