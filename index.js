var eslint = require('eslint');
var cli = new eslint.CLIEngine();
var formatter = cli.getFormatter();
var through = require('through');
var error = console.error.bind(console);

function lint(file) {
    if (!/\.jsx?/.test(file) && file != null) {
        return through();
    }

    var data = '';

    return through(write, end);

    function write(buf) {
        data += buf;
    }

    function end() {
        var report = cli.executeOnText(data, file);

        if (report.results.length) {
            error(formatter(report.results));
        }

        this.queue(data);
        this.queue(null);
    }
}

module.exports = lint;
