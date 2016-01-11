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

            if (!options.continuous) {
                this.emit('error', 'eslintify: linting error(s) detected.');
            }
        }

        this.queue(data);
        this.queue(null);
    }

    if (typeof file !== 'string' || file.lastIndexOf('.') === -1) {
        return through();
    }

    var givenExtension = file.slice(file.lastIndexOf('.') + 1, file.length);
    var supportedExtensions = ['js', 'jsx', 'es6'];

    if (options.extension) { supportedExtensions.concat(options.extension); }
    if (options.extensions) { supportedExtensions.concat(options.extensions); }

    if (supportedExtensions.indexOf(givenExtension) !== -1) {
        return through(write, end);
    }

    return through();
}

module.exports = lint;
