Template.Book.events({
	'click .checkout': function(e) {
		e.preventDefault();
		if (confirm("Checkout this book?")) {
			Meteor.call('bookCheckout', this._id, function(error, result) {
				if (! error) {
					Router.go('CheckedOutBooks');  
				}
			});
		}
	}
});

Template.Book.helpers({
	ownsDocument: function() {
	    return ownsDocument(Meteor.user()._id, this);
	}, 
	isCheckedOut: function() {
	    if (this.checkoutUserId) {
	    	return this.checkoutUserId;
	    }
	    return false;
	}
});