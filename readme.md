# ESLint Config Cimpress AT Squad

[![npm version](https://badge.fury.io/js/eslint-config-cimpress-atsquad.svg)](https://www.npmjs.com/package/eslint-config-cimpress-atsquad)

A set of opinionated ESLint rules with Prettier integration from the AT Squad at Cimpress.

## Usage

Requires Node.js 22.13+ and ESLint 10.4+ (flat config).

1. `npm i -D eslint-config-cimpress-atsquad eslint prettier typescript`
2. create `eslint.config.mjs`

```javascript
import cimpressAtsquad from 'eslint-config-cimpress-atsquad';

export default cimpressAtsquad;
```

3. add the following to your `package.json`

```json
{
  "prettier": "eslint-config-cimpress-atsquad/prettier"
}
```

The config applies to `**/*.ts` files and reads `./tsconfig.eslint.json`.

## Using without the library

`eslint.mjs` only imports npm packages, so it can be copied to `eslint.config.mjs` in a project. Install the packages
listed at the top of the file and put the options from `prettier.js` into a Prettier config (e.g. `.prettierrc.json`).

## Publishing new version

Publishing is done by the `NPM publish` GitHub workflow (`.github/workflows/npm-publish.yml`).

1. Create a branch and bump `version` in `package.json` following semver, e.g. to `3.1.0`. Changing rules or raising a
   peer dependency range is a breaking change and needs a new major version.
2. Open a pull request titled `Release 3.1.0` and merge it to `master`. The commit that lands on `master` must contain
   `Release ` in its message. A merge commit includes the pull request title, and with squash merge use the same text as
   the commit title.
3. The workflow runs on the push to `master` and, because of that commit message, runs `npm publish --access public`.
   Check the run in the Actions tab and the new version on npm.

Pushes to `master` without `Release ` in the commit message run the workflow but skip publishing. Pushing a tag
`v*` also triggers the workflow, and it publishes if the tagged commit message contains `Release `.

The workflow authenticates with the `NPM_TOKEN` repository secret. Set it up once under the repository's
Settings > Secrets and variables > Actions, using an npm automation token with publish rights for the package.

If a publish fails, fix the cause and re-run the workflow. npm refuses to publish a version that already exists, so
bump the version first if it was published partially.

To publish manually, run `npm login` and `npm publish --access public`. Use `npm pack --dry-run` first to check the
package contents (`eslint.mjs`, `prettier.js`, readme, license).

## License

[Apache License 2.0](./LICENSE)
