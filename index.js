var eslint = require('eslint');
var through = require('through');
var error = console.error.bind(console);

function getLinter(options, emitErrors) {
    var cli = new eslint.CLIEngine(options || {});
    var formatter = cli.getFormatter();

    return function lint(file) {
        if (!/\.jsx?/.test(file) && file != null) {
            return through();
        }

        var data = '';

        return through(write, end);

        function write(buf) {
            data += buf;
        }

        function end() {
            var results = eslint.CLIEngine.getErrorResults(
                cli.executeOnText(data, file).results
            );

            if (results.length) {
                error(formatter(results));
                emitErrors && this.emit('error', new Error('Lint errors'));
            }

            this.queue(data);
            this.queue(null);
        }
    }
}

module.exports = getLinter;