var templateName = 'AddBook';
Template.AddBook.created = function() {
  Session.set(templateName + 'Validator', {});
}

Template.AddBook.events({
    'submit form': function(e) {
        // function(e, tmpl) if you need the template instance
        e.preventDefault();

        var doc = {
            title: $(e.target).find('[name=title]').val(),
            author: $(e.target).find('[name=author]').val()
        };
        // Alternative:
        // var doc = {
        //  title: tmpl.$('[name=title]').val(),
        //  author: tmpl.$('[name=author]').val()
        // };

        var validator = validateBook(doc);
        if (validator.title || validator.author)
            return Session.set(templateName + 'Validator', validator);

        Meteor.call('bookInsert', doc, function(error, result) {
            if (! error) {
                Router.go('MyBooks', {_id: result._id});  
            }
        });
    }
});