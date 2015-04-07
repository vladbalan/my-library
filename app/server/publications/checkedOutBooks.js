Meteor.publish('checkedOutBooks', function(userId) {
    return Books.find({
        $and: [
            {checkoutUserId: userId},
            {$or: [
                {$and: [ 
                    {isPrivate: { $exists: true }}, 
                    {isPrivate: false} 
                ]}, 
                {isPrivate: { $exists: false }}
            ]}
        ]
    });
});