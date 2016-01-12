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

### included files

If you wish to lint files with extensions other than `*.js *.jsx *.es6`, add `extension` options. In object form, supply an `extension` string or `extensions` array:

```bash
browserify your_file.js -t [ eslintify --extension html --extension haml ]
```

```JavaScript
.transform({ extensions: ['html', 'haml'] }, eslintify)
```
