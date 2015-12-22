var eslint = require('eslint');
var through = require('through');
var error = console.error.bind(console);

function lint(file, options) {
    var cli = new eslint.CLIEngine(options || {});
    var formatter = cli.getFormatter();
    var data = '';

    function write(buf) {
        data += buf;
    }

    function end() {
        var results = eslint.CLIEngine.getErrorResults(
            cli.executeOnText(data, file).results
        );

        if (results.length) {
            error(formatter(results));
            this.emit('error', 'eslintify: linting errors detected.');
        }

        this.queue(data);
        this.queue(null);
    }

    if (!/\.(js|jsx|es6)/.test(file) && file !== null) {
        return through();
    }

    return through(write, end);
}

module.exports = lint;