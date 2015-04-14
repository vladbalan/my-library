MostPopularBooksListController = SortedBooksListController.extend({
    waitOn: function() {
        if (!! Meteor.user()) {
            return [
                Meteor.subscribe('sortedBooks', {"checkouts": -1})
                , Meteor.subscribe('checkouts')
            ]
        }
    }
});