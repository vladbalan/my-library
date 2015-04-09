Template.Header.helpers({
    pathForCheckedOutBooks: function () {
        return Router.routes.CheckedOutBooks.path();
    }
    , notificationText: function () {
        return 'You have a new notification!';
    }
});