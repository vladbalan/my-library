Meteor.publish('sortedBooks', function(sort) {
    return Books.find(
        {
            $or: [
                {$and: [ 
                    {isPrivate: { $exists: true }}
                    , {isPrivate: false}
                ]}
                , {isPrivate: { $exists: false }}
            ]
        }
        , {
            sort: sort
        }
    );
});