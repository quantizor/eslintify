# eslintify

__Stream module for linting JavaScript programs.__

## Install

```bash
npm install eslintify
```

## browserify

```bash
browserify your_file.js -t eslintify
```

### "continuous" mode

If you wish to get linting reports in the console but not break the build, enable "continuous mode" like so:

```bash
browserify your_file.js -t [ eslintify --continuous ]
```
