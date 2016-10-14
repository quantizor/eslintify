3.1.0 (October 14, 2016)

7ef68dd Update license year
dd15e54 Deprecate "continuous" mode, introduce "passthrough" flag

---

3.0.0 (August 18, 2016)

- __Introduce `--quiet-ignored` flag__ (94a7a35bce429a2980e1ba05052fb13909cd52b8) This flag is an alternative to `--quiet`, which suppresses _all_ warnings, rather than just "ignored files".
- __eslint 3.x__ (8e758b9426979f44ec7790b2d46f90cf73e862e2)

---

2.1.0 (May 30, 2016)

- __Add quiet mode via `--quiet` flag__ (b203e9c918e9f2aefafde4af80cd89ae294fc7b7) The implementation exactly matches how ESLint handles this behavior in their CLI.

---

2.0.1 (March 2, 2016)

- fix require path resolution of the default formatter

---

2.0.0 (March 2, 2016)

- Update to eslint@2.x
- Switch default formatter to https://github.com/royriojas/eslint-friendly-formatter
- Add "formatter" option flag to use a built-in eslint formatter if desired

---

1.1.1 (January 15, 2016)

- fix: assign output of Array.prototype.concat() (15d2face7b23e87dd45f1dce039f513a6ab71975)

---

1.1.0 (January 13, 2016)

- Enhancement: allow inclusion of non-(js|jsx|es6) files via `opts.extensions` or the `--extension` CLI flag
- Fix: now properly shows warnings (3d89b01bb5f0dbf7904076847339f4aaf45b62f1)

---

1.0.1 (December 29, 2015)

- Fixed checking for files that only end with certain JS-relevant extensions.

---

1.0.0 (December 22, 2015)

__Breaking Change:__ eslintify now breaks the build by default on detected errors

- added "continuous" mode, which will not emit an error event if desired (and subsequently not break the build); see [README](README.md)
- locked down modules to current semver targets for safety

---

0.0.3 (September 1, 2015)

- Updating metadata for npm, no code changes

---

0.0.2 (August 28, 2015)

- Fix blank line issue for files without errors (props to @jmm) - https://github.com/yaycmyk/eslintify/pull/1

---

0.0.1 (July 9, 2015)

- Initial commit
