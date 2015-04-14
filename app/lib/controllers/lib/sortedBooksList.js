SortedBooksListController = RouteController.extend({
    template: 'BooksStats'
    , data: function() {
        return {
            books: Books.find()
        };
    }
});