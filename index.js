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

    var extensions = ['js', 'jsx', 'es6'].concat(options.extension || options.extensions || []);
    var filesRegExp = options.filesRegExp ? new RegExp(options.filesRegExp) : /\.(js|jsx|es6)$/;
    if (file !== null && !extensions.some(function (ext) { return '.' + ext == file.substr(-1 - ext.length); })) {
        return through();
    }

    return through(write, end);
}

module.exports = lint;
