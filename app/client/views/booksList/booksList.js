// Initialize search string
Template.BooksList.onCreated(function () {
	this.searchString = new ReactiveVar('');
});

// Capture search string changes
Template.BooksList.events({
	'keyup .search-input': function(e, tmpl) {
		tmpl.searchString.set($(e.target).val());
	}
});

// Return filtered data context
Template.BooksList.helpers({
	books: function() {
		return Books.find({
			$or: [
				{title: { $regex: Template.instance().searchString.get(), $options: 'i' }},
				{author: { $regex: Template.instance().searchString.get(), $options: 'i' }}
			]
		});
	}
});