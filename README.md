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

If you wish to lint files with extensions other than `*.js *.jsx *.es6`, add `extension` options. The API mirrors how Browserify handles adding extra extensions:

via CLI
```bash
browserify your_file.js -t [ eslintify --extension html --extension haml ]
```

via JS
```js
.transform({extensions: ['html', 'haml']}, eslintify)
```

### other result formatters

Starting with eslintify 2.0, the default formatter is [royriojas/eslint-friendly-formatter](https://github.com/royriojas/eslint-friendly-formatter). You can opt to switch it out for your own choice by providing one of the [eslint official formatter names](http://eslint.org/docs/developer-guide/nodejs-api#getformatter) or a path to a requireable node module.

via CLI
```bash
browserify your_file.js -t [ eslintify --formatter json ]
```

via JS
```js
.transform({formatter: 'json'}, eslintify)
```

custom formatter via CLI
```bash
browserify your_file.js -t [ eslintify --formatter ./node_modules/eslint-path-formatter ]
```

custom formatter via JS
```bash
.transform({formatter: './node_modules/eslint-path-formatter'}, eslintify)
```
