# eslintify

__Stream module for linting JavaScript programs.__

---

* [Install](#install)
  * [browserify](#browserify)
    + ["quiet" mode](#-quiet--mode)
    + ["ignored file" warnings](#-ignored-file--warnings)
    + [setting when to break the build](#setting-when-to-break-the-build)
    + ["continuous" mode (DEPRECATED)](#-continuous--mode--deprecated-)
    + [included files](#included-files)
    + [other result formatters](#other-result-formatters)

---

## Install

```bash
npm install eslintify
```

The major version number of eslintify is tied to `eslint`, so if you want to use `eslint@3`, install `eslintify@3`.

---

## browserify

```bash
browserify your_file.js -t eslintify
```

---

### "quiet" mode

Functionally equivalent to the [ESLint CLI](http://eslint.org/docs/user-guide/command-line-interface) flag `--quiet`: it causes _all_ warnings to be silently ignored. The default is for warnings to be outputted along with errors.

```bash
browserify your_file.js -t [ eslintify --quiet ]
```

If you only wish to suppress "ignored file" warnings, use the `--quiet-ignored` flag instead.

---

### "ignored file" warnings

If you choose to exclude files via `.eslintignore` or elsewhere and the linter is run over them (due to them being in the globbing path), it will produce a warning. `eslint@3` introduced a way for these unnecessary warnings to be suppressed; the implementation in this module is as follows:

```bash
browserify your_file.js -t [ eslintify --quiet-ignored ]
```

---

### setting when to break the build

If you wish to get linting reports in the console but not break the build, use the `passthrough` flag like so:

```bash
browserify your_file.js -t [ eslintify --passthrough errors --passthrough warnings ]
```

You can customize this functionality to only allow errors to break the build (or warnings, if you want!):

```bash
browserify your_file.js -t [ eslintify --passthrough warnings ]
```

---

### "continuous" mode (DEPRECATED)

_NOTE: THIS IS DEPRECATED AND WILL BE REMOVED IN `eslintify@4`. Use the `--passthrough` flag._

If you wish to get linting reports in the console but not break the build, enable "continuous mode" like so:

```bash
browserify your_file.js -t [ eslintify --continuous ]
```

---

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

---

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
