var templateName = 'AddBook';
Template.AddBook.created = function() {
  Session.set(templateName + 'Validator', {});
}

Template.AddBook.events({
	'submit form': function(e) {
		e.preventDefault();

		var book = {
			title: $(e.target).find('[name=title]').val(),
			author: $(e.target).find('[name=author]').val()
		};

		var validator = validateBook(book);
	    if (validator.title || validator.author)
	    	return Session.set(templateName + 'Validator', validator);

	    Meteor.call('bookInsert', book, function(error, result) {
			if (! error) {
				Router.go('MyBooks', {_id: result._id});  
			}
		});
	}
});