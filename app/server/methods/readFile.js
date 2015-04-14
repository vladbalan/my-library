// Define Logger
var Logger = function () {
    this.log;
}

Logger.prototype.addLine = function (string) {
    console.log(this.formatLine(string));
    this.log += this.formatLine(string);
}

Logger.prototype.formatLine = function (string) {
    return '<span class="log-timestamp"> > [' + timestamp() + ']</span> ' + string + '<br>';
}

Logger.prototype.getLog = function () {
    return this.log;
}

Logger.prototype.reset = function () {
    this.log = '';
}

// Variable declaration
var logger = new Logger();
var fs = Npm.require('fs');

// Function declaration 
var timestamp = function () {
    return moment().format('HH:mm:ss SSS');
}

var readFileAsync = function(type, callback) {
    fs.readFile('../../../../../public/cool_file.txt', 'utf8', function(err, res) {
        if (err) {
            logger.addLine(type + ' fs.readFile error: ' + err);
        } else {
            logger.addLine(type + ' fs.readFile result: <br> <pre class="file-contents">' + res + '</pre>');
            callback && callback( null, res);
        }
    });
}

// Wrap async function
var readFileSync =  Meteor.wrapAsync(readFileAsync); 

// Meteor method declaration
Meteor.methods({
    readFile: function () {
        logger.reset();
        /* */ // <-- These are tests
        logger.addLine('readFile method called');

        logger.addLine('1. sync before');
        readFileSync('1. sync');
        logger.addLine('1. sync after');

        logger.addLine('1. async before');
        readFileAsync('1. async');
        logger.addLine('1. async after');
        
        logger.addLine('2. sync before');
        var fileContents = readFileSync('2. sync');
        logger.addLine('2. sync after');
        // logger.addLine('2. sync after - returned contents: <br>' + fileContents);

        // other tests ...
        return logger.getLog();
        // Comment them out to just print file contents --> /* */
        
        // Return formated file contents
        var fileContents = readFileSync('');
        return '<pre>' + fileContents + '</pre>';
        
    }
});