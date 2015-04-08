CheckedOutBooksListController = BooksListController.extend({
    waitOn: function() {
        if (!! Meteor.user()) {
            return Meteor.subscribe('checkedOutBooks', Meteor.user()._id)
        }
    }
    , data: function() {
        return {
            books: Books.find()
            , showCheckedOutBooks : true
        };
    }
});