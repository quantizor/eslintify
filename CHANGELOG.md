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
