# Explanations

We prefer Playwright for everything related to E2E testing. It is open source, maintained by Microsoft.

*Recommendation*:
- Use constant test content (e.g. test content that never changes) to test your components and pages.
- Run your dev-enironment and the tests in a Docker container to get constant test results and prevent flaky tests.
- Run the tests on every Pull Request as quality gate.
- Run the tests in your release pipeline as quality gate.

## Use axe with Playwright

*Goal*: Identify and fix common accessibility issues.

*How*: A lot of rulesets in WCAG can be re-written as programmatic conditions. For example: `UL-elements may only contain LI-elements as direct children.`. It is pretty easy to traverse the DOM tree with JavaScript and check if this condition is met or not.

These conditions can then be used to create assertions in automated test frameworks like Playwright.

*Recommendation*: Use it either with test content or on live pages.

*Example*: [/tests/axe.spec.ts](/tests/axe.spec.ts)

*Links*:
- [Accessibility testing using Playwright](https://playwright.dev/docs/accessibility-testing)
- [axe-core for Playwright](https://www.npmjs.com/package/@axe-core/playwright)

## Use Playwright snapshot testing

*Goal*: Catch regressions in the accessibility tree.

*How*: A snapshot of the accessibility is taken (yaml-format) at a point in time. This serves as the baseline. In subsequent test runs, the current snapshot is compared to the baseline to spot any differences.

*Recommendation*: Use test content (which never changes) for run these tests. Otherwise you'll get regressions on every iteration.

*Example*: [/tests/snapshot.spec.ts](/tests/snapshot.spec.ts)

*Links*:
- [Snapshot testing using Playwright](https://playwright.dev/docs/aria-snapshots)

### Accessibility Tree

The browsers uses the markup to generate a DOM tree. Based on the DOM tree, it also creates the so called Accessibility tree. It contains accessibility-related information for most HTML elements.

Platform-specific accessibility APIs rely on this tree to provide a representation of the content which can be understood by assistive technologies.

Links:
- [Accessibility Tree on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)

