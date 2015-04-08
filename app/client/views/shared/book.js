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
    , 'click .checkin': function(e) {
        e.preventDefault();
        if (confirm("Checkin this book?")) {
            Meteor.call('bookCheckout', this._id, true, function(error, result) {
                if (error) {
                    //
                }
            });
        }
    }
});

Template.Book.helpers({
    ownsDocument: function () {
        return ownsDocument(Meteor.user()._id, this);
    } 
    , isCheckedOut: function () {
        if (this.checkoutUserId) {
            return true;
        }
        return false;
    }
    , isOverdue: function () {
        if (this.checkoutUserId === Meteor.user()._id && this.overdue) {
            return true;
        }
        return false;
    }
});