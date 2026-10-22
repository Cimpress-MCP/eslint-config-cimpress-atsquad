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

Publishing is done by the `npm-publish` GitHub workflow (`.github/workflows/npm-publish.yml`) on every push to `master`.
It publishes the version from `package.json` when that version is not on npm yet, and creates the git tag `v<version>`.

1. Create a branch and bump `version` in `package.json` following semver. Changing rules or raising a peer dependency
   range is a breaking change and needs a new major version.
2. Open a pull request and merge it to `master`.
3. Check the `npm-publish` run in the Actions tab. The new version should be on npm and the tag `v<version>` in the repo.

Versions with a suffix (e.g. `3.1.0-beta`) are published with the `next` tag, so `npm i` still installs the last stable
version. Stable versions get the `latest` tag.

The workflow needs the `NPM_AUTH_TOKEN` repository secret (an npm automation token with publish rights for the package).
If the publish fails, fix the cause and re-run the workflow; versions that are already on npm are skipped.

To publish manually, log in with `npm login` and run `npm publish --access public` (add `--tag next` for suffixed
versions). Use `npm pack --dry-run` first to check the package contents (`eslint.mjs`, `prettier.js`, readme, license).

## License

[Apache License 2.0](./LICENSE)
