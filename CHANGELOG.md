# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2023-11-16

### Changed

- Tweaked release pipeline.
- Test release to see if it worked.

## [0.2.1] - 2023-11-16

### Changed

- Moved to Codeberg.
- Ported CI pipeline to Woodpecker.

### Removed

- Support for running development scripts with `bun`. Was too inconsistent.

## [0.2.0] - 2023-11-15

### Added

- Enabled coersions, such as `trimmed`.

## [0.1.1] - 2023-09-13

### Added

- Support for running development scripts with `bun`.

### Removed

- Notice in README that there's "nothing here". There is, in fact, something here, lol.

## [0.1.0] - 2023-09-13

### Added

- `sValidator` middleware, that accepts a validation target (i.e. `"json"` or `"form"`), a Superstruct schema, and an optional error handling callback.
- Comprehensive unit tests.

## [0.0.1] - 2023-09-18

### Added

- Initial boilerplate.

[0.2.2]: https://codeberg.org/AverageHelper/hono-superstruct-validator/compare/v0.2.1...v0.2.2
[0.2.1]: https://codeberg.org/AverageHelper/hono-superstruct-validator/compare/v0.2.0...v0.2.1
[0.2.0]: https://codeberg.org/AverageHelper/hono-superstruct-validator/compare/v0.1.1...v0.2.0
[0.1.1]: https://codeberg.org/AverageHelper/hono-superstruct-validator/compare/v0.1.0...v0.1.1
[0.1.0]: https://codeberg.org/AverageHelper/hono-superstruct-validator/compare/v0.0.1...v0.1.0
[0.0.1]: https://codeberg.org/AverageHelper/hono-superstruct-validator/releases/tag/v0.0.1
