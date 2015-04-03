Template.AddBook.events({
	'submit form': function(e) {
		e.preventDefault();

		var book = {
			title: $(e.target).find('[name=title]').val(),
			author: $(e.target).find('[name=author]').val()
		};

		Meteor.call('bookInsert', book, function(error, result) {
			if (! error) {
				Router.go('MyBooks', {_id: result._id});  
			}
		});
	}
});