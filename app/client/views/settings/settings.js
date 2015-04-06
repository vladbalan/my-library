Template.Settings.events({
	'change [name="private"]': function(e) {
		// function(e, tmpl) if you need the template instance
		e.preventDefault();

		console.log($(e.target).val());
		Meteor.call('changeProfileVisibility', $(e.target).val(), function(error, result) {
			if (error) {
				//
			}
		});
	}
});

Template.Settings.helpers({
	isPrivate: function() {
		var user = Meteor.user();
		if (user && user.profile && user.profile.isPrivate) {
	    	return true;
	    }
	    return false;
	},
	isVisible: function() {
		var user = Meteor.user();
		if (user && user.profile && user.profile.isPrivate) {
	    	return false;
	    }
	    return true;
	}
});