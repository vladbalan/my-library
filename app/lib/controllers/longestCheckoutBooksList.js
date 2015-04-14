LongestCheckoutBooksListController = SortedBooksListController.extend({
    waitOn: function() {
        if (!! Meteor.user()) {
            return [
                Meteor.subscribe('sortedBooks', {"topCheckoutDuration": -1})
                , Meteor.subscribe('checkouts')
            ]
        }
    }
});