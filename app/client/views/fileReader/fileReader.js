var printLog = function (string) {
    $('.reader-console').append(string);
}

var clearLog = function () {
    $('.reader-console').html('');
}

Template.FileReader.events({
    'click .read-file': function (e) {
        e.preventDefault();
        clearLog();
        disableElement(e.target);

        Meteor.call('readFile', function (error, result) {
            if (error) {
                printLog('method error: ' + error);
            } else {
                printLog(result);
                enableElement(e.target);
            }
        });
    }
});