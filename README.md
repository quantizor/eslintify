# eslintify

__Stream module for linting JavaScript programs.__

## Install

    npm install eslintify

## browserify

    browserify your_file.js -t eslintify

### "continuous" mode

If you wish to get linting reports in the console but not break the build, enable "continuous mode" like so:

    browserify your_file.js -t [ eslintify --continuous ]
