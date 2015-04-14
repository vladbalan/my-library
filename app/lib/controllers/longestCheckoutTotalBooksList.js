LongestCheckoutTotalBooksListController = SortedBooksListController.extend({
    waitOn: function() {
        if (!! Meteor.user()) {
            return [
                Meteor.subscribe('sortedBooks', {"totalCheckoutDuration": -1})
                , Meteor.subscribe('checkouts')
            ]
        }
    }
});