Meteor.publish('otherBooks', function(userId) {
    return Books.find({
        $and: [ 
            {$and: [
                {userId: { $ne: userId }},
                {$or: [
                    {$and: [ 
                        {isPrivate: { $exists: true }}, 
                        {isPrivate: false} 
                    ]}, 
                    {isPrivate: { $exists: false }}
                ]}
            ]}, 
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