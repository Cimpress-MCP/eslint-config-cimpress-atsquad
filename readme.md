# ESLint Config Cimpress AT Squad
[![npm version](https://badge.fury.io/js/eslint-config-cimpress-atsquad.svg)](https://www.npmjs.com/package/eslint-config-cimpress-atsquad)

A set of opinionated ESLint rules with Prettier integration from the AT Squad at Cimpress.

## Usage
1. `yarn add -D eslint-config-cimpress-atsquad eslint prettier`
2. add the following sections to your `package.json`

```javascript
{
  "eslintConfig": {
      "extends": "cimpress-atsquad"
    },
  "prettier": "eslint-config-cimpress-atsquad/prettier",
}
```

## Publishing new version
Uses https://github.com/marketplace/actions/publish-to-npm

Change the version in `package.json`, e.g. to `2.0.0` and create a commit with message `Release 2.0.0`.
A new tag with version `v2.0.0` will be created and the package will be published to NPM registry.

## License

[Apache License 2.0](./LICENSE)
