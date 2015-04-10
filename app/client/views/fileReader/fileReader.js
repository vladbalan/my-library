var printLog = function (string) {
    $('.reader-console').append(string);
}

Template.FileReader.events({
    'click .read-file': function (e) {
        e.preventDefault();
        $(e.target).addClass('disabled').attr('disabled', true);

        Meteor.call('readFile', function (error, result) {
            if (error) {
                printLog('method error: ' + error);
            } else {
                printLog(result);
            }
        });
    }
});