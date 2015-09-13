# eslint-config-qmmr
Shareable eslint config for my projects

[eslint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html) I use for my personal projects.

```
npm install eslint-config-qmmr
```

[![npm version](https://badge.fury.io/js/eslint-config-qmmr.svg)](http://badge.fury.io/js/eslint-config-qmmr)

## Usage

Extend your `.eslintrc` with one of the following configurations:

### default

This is my default config for generic projects. It extends the `eslint:recommended` config. ([source](index.js))

```js
{
  "extends": "qmmr"
}
```

### es6

For projects that use ECMAScript[6|2015]. It extends the `default` config. ([source](es6.js))

```js
{
  "extends": "qmmr/es6"
}
```

### react

For projects that use React.js and Babel.js.
It extends the `es6` config. ([source](react.js)).

Requires `npm install babel-eslint eslint-plugin-react --save-dev`.

```json
{
  "extends": "qmmr/react"
}
```
