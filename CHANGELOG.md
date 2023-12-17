# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.7] - 2023-12-16

### Changed

- Trying a different event type. Version bump for testing.

## [0.2.6] - 2023-12-16

### Changed

- Fixed autodeploy pipeline, probably. Version bump for testing.

## [0.2.5] - 2023-12-16

### Added

- CI/CD pipeline step to auto-publish to NPM.

## [0.2.4] - 2023-12-16

### Changed

- Moved codebase to my own git forge.
- Ported CI pipeline to Forgejo Actions.

## [0.2.3] - 2023-11-17

### Fixed

- CI release step works now!

## [0.2.3-beta.2] - 2023-11-16

### Changed

- New release script. Test build.

## [0.2.3-beta.1] - 2023-11-16

### Changed

- Release script again. This is a test release.

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

[0.2.7]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.6...v0.2.7
[0.2.6]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.5...v0.2.6
[0.2.5]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.4...v0.2.5
[0.2.4]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.3...v0.2.4
[0.2.3]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.3-beta.2...v0.2.3
[0.2.3-beta.2]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.3-beta.1...v0.2.3-beta.2
[0.2.3-beta.1]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.2...v0.2.3-beta.1
[0.2.2]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.1...v0.2.2
[0.2.1]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.2.0...v0.2.1
[0.2.0]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.1.1...v0.2.0
[0.1.1]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.1.0...v0.1.1
[0.1.0]: https://git.average.name/AverageHelper/hono-superstruct-validator/compare/v0.0.1...v0.1.0
[0.0.1]: https://git.average.name/AverageHelper/hono-superstruct-validator/releases/tag/v0.0.1
