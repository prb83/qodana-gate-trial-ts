# qodana-gate-trial-ts

A small TypeScript project for trying Qodana on pull requests.

The workflow `.github/workflows/quality.yml` runs on a pull request. It checks the types, runs the
tests with coverage, and then runs Qodana in pull-request mode. It keeps the result files of Qodana
and the coverage report as artifacts of the run.

## Run the tests

```sh
npm ci
npm run typecheck
npm test
```

## The coverage report for Qodana

Qodana reads one coverage report from the directory `.qodana/code-coverage`.
The tests write it there as an LCOV file:

```sh
npm run coverage
```
