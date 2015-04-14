// Your routes file should be clean and concise.
// You are only specifying route definitions here, e.g. the paths for the route, where the route is available (client/server) and possibly naming the route.
// The heavy work for each route like data, waitOn, render, etc. all go in their individual route controller files in the client/controllers or server/controllers folders respectively.

Router.configure({
    layoutTemplate: 'MasterLayout'
    , notFoundTemplate: 'NotFound'
    , loadingTemplate: 'Loading'
    , waitOn: function() {
        if (!! Meteor.user()) {
            return [
                // Meteor.subscribe('checkedOutBooks', Meteor.user()._id)
            ];
        }

    }
});

// Routes

Router.route('/', {
    name: 'MyBooks'
    , controller: MyBooksListController
});

Router.route('/other', {
    name: 'OtherBooks'
    , controller: OtherBooksListController
});

Router.route('/checked-out', {
    name: 'CheckedOutBooks'
    , controller: CheckedOutBooksListController
});

Router.route('/add', {
    name: 'AddBook'
});

Router.route('/settings', {
    name: 'Settings'
});

Router.route('/audit-logs', {
    name: 'AuditLogs'
    , controller: AuditLogsController
});

Router.route('/file-reader', {
    name: 'FileReader'
});

Router.route('/stats', {
    name: 'Stats'
});

Router.route('/most-popular', {
    name: 'MostPopular'
    , controller: MostPopularBooksListController
});

Router.route('/longest-checkout', {
    name: 'LongestCheckout'
    , controller: LongestCheckoutBooksListController
});

Router.route('/longest-checkout-total', {
    name: 'LongestCheckoutTotal'
    , controller: LongestCheckoutTotalBooksListController
});

Router.route('/oldest', {
    name: 'Oldest'
    , controller: OldestBooksListController
});