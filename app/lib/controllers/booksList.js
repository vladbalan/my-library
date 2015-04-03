BooksListController = RouteController.extend({
  template: 'BooksList',
  data: function() {
    return {
      books: Books.find()
    };
  }
});