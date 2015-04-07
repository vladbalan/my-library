// Set up search string dependency
SearchString = function () {
	this.searchString = "";
	this.dep = new Tracker.Dependency;
}

SearchString.prototype.get = function () {
	this.dep.depend();
	return this.searchString;
};

SearchString.prototype.set = function (newString) {
	if (newString !== this.searchString) {
		this.searchString = newString;
		this.dep.changed();
	}
};

// Instantiate SearchString in this file's scope
var searchString = new SearchString();

// Capture search string changes
Template.BooksList.events({
	'keyup .search-input': function(e, tmpl) {
		searchString.set($(e.target).val());
	}
});

// Return filtered data context
Template.BooksList.helpers({
	books: function() {
		return Books.find({
			$or: [
				{title: { $regex: searchString.get(), $options: 'i' }},
				{author: { $regex: searchString.get(), $options: 'i' }}
			]
		});
	}
});