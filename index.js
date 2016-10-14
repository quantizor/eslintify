var eslint = require('eslint');
var through = require('through');
var error = console.error.bind(console);
var default_formatter = require.resolve('eslint-friendly-formatter');

var ERRORS = 'errors';
var WARNINGS = 'warnings';

function haveIssues(result) {
    return result.errorCount || result.warningCount;
}

function haveErrors(result) {
    return result.errorCount;
}

function haveWarnings(result) {
    return result.warningCount;
}

function lint(file, options) {
    options = options || {};
    options.formatter = options.formatter || default_formatter;

    var cli = new eslint.CLIEngine(options);
    var formatter = cli.getFormatter(options.formatter);
    var data = '';

    function write(buf) {
        data += buf;
    }

    function end() {
        var results = cli.executeOnText(data, file, !options['quiet-ignored']).results;

        if (options.quiet) {
            results = eslint.CLIEngine.getErrorResults(results);
        } // filter out warnings

        if (results.length && results.some(haveIssues)) {
            var passthrough = options.passthrough ? Array.prototype.concat(options.passthrough) : [];
            var shouldBreakBuild = false;

            if (passthrough.length) {
                var errorsAllowed = passthrough.indexOf(ERRORS) !== -1;
                var warningsAllowed = passthrough.indexOf(WARNINGS) !== -1;

                if (
                       (!errorsAllowed   && !warningsAllowed)
                    || (!errorsAllowed   && results.some(haveErrors))
                    || (!warningsAllowed && results.some(haveWarnings))
                ) {
                    shouldBreakBuild = true;
                }
            } else if (!options.continuous) {
                shouldBreakBuild = true;
            }

            error(formatter(results));

            if (shouldBreakBuild) {
                this.emit('error', 'eslintify: linting issues(s) detected.');
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

    if (options.extension) {
        supportedExtensions = supportedExtensions.concat(options.extension);
    }

    if (options.extensions) {
        supportedExtensions = supportedExtensions.concat(options.extensions);
    }

    if (supportedExtensions.indexOf(givenExtension) !== -1) {
        return through(write, end);
    }

    return through();
}

module.exports = lint;
