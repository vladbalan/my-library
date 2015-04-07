Meteor.methods({
    changeProfileVisibility: function (value) {
        var user = Meteor.user();
        var isPrivate = (value != 0) ? true : false;
        
        // Update user visibility
        Meteor.users.update(
            user._id,
            {$set: {'profile.isPrivate': isPrivate}},
            function(error) {
                if (error) {
                    // display the error to the user
                    throw new Meteor.Error('invalid-user', error.reason);
                } else {
                    return true;
                }
            }
        );

        // Update books visibility
        Books.update(
            {userId: user._id}, 
            {$set: {isPrivate: isPrivate}}, 
            {multi: true},
            function(error) {
                if (error) {
                    // display the error to the user
                    throw new Meteor.Error('invalid-library', error.reason);
                } else {
                    return true;
                }
            }
        );
    }
});