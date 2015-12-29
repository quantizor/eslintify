1.0.1 (December 29, 2015)

Fixed checking for files that only end with certain JS-relevant extensions.

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
