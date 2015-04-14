Meteor.methods({
    checkOverdue: function () {
        Books.find().forEach(function (doc) {
            // If book was not up to this point overdue
            if (doc.dateCheckout && ! doc.overdue) {
                var dateOverdue = moment(doc.dateCheckout).add(TIME_LIMIT, "seconds").toDate();
                // If book is overdue as of now
                if (moment().isAfter(moment(dateOverdue))) {
                    // Mark book as overdue
                    Meteor.call('bookOverdue', doc, function(error, result) { if (error) {/* */} });
                }
            }
        });
    }
});