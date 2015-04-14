OldestBooksListController = SortedBooksListController.extend({
    waitOn: function() {
        if (!! Meteor.user()) {
            return [
                Meteor.subscribe('sortedBooks', {"dateCreated": 1})
                , Meteor.subscribe('checkouts')
            ]
        }
    }
});