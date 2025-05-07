# Automated a11y tests

## Installation

### Node

Use the node version mentioned in `.nvmrc`

### Install deps

Run `npm install` to install all dependencies.

### Build docker image

Tests run in a docker container. Make sure you build the docker image before running tests by running `npm run docker:test:build`.

## Tests

### CLI Test

To run the tests on the CLI, use `npm run test`.

### Watch mode

To run the tests in Watch mode, use `npm run test:watch`.

## Links

- [Playwright](https://playwright.dev/)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [PlaywrightSnapshot testing](https://playwright.dev/docs/aria-snapshots)
- [axe-core](https://www.npmjs.com/package/@axe-core/playwright)