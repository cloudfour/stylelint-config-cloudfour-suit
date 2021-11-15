# stylelint-config-cloudfour-suit

[![NPM version](http://img.shields.io/npm/v/stylelint-config-cloudfour-suit.svg)](https://www.npmjs.org/package/stylelint-config-cloudfour-suit) [![Build Status](https://github.com/cloudfour/stylelint-config-cloudfour-suit/workflows/CI/badge.svg)](https://github.com/cloudfour/stylelint-config-cloudfour-suit/actions?query=workflow%3ACI) [![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

> A sharable stylelint config object that enforces [Cloud Four's CSS Standards](https://github.com/cloudfour/guides/tree/main/css) & [SUIT naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

## Installation

Install [stylelint](https://stylelint.io/) and `stylelint-config-cloudfour-suit`:

```
npm install stylelint stylelint-config-cloudfour-suit --save-dev
```

## Usage

If you've installed `stylelint-config-cloudfour-suit` locally within your project, just set your `stylelint` config to:

```js
{
  "extends": "stylelint-config-cloudfour-suit"
}
```

You'll probably also want to add a script to your `package.json` file to make it easier to run Stylelint with this config:

```json
"scripts": {
  "lint:css": "stylelint '**/*.css'"
}
```

### Using with Prettier

It's common to [pair Stylelint with Prettier](https://prettier.io/docs/en/integrating-with-linters.html#stylelint). If you're going to use both, you'll want to add [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier), which is a config that disables any Stylelint rules that conflict with Prettier.

```
npm install stylelint-config-prettier --save-dev
```

Then add it to your Stylelint config. It'll need to be the last item in the `extends` array so it can override other configs.

```js
{
  extends: ["stylelint-config-cloudfour-suit", "stylelint-config-prettier"],
}
```

Then you can update your `package.json` script to run Prettier as well as Stylelint:

```json
"scripts": {
  "lint:css": "prettier --list-different '**/*.css' && stylelint '**/*.css'"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```js
{
  "extends": "stylelint-config-cloudfour-suit",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Documentation

### Extends

- [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour): A sharable stylelint config object that enforces [Cloud Four's CSS Standards](https://github.com/cloudfour/guides/tree/master/css)

### Plugins

- [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern): Stylelint plugin that enforces SUIT naming convention (despite the name).

### What's the difference between [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit) and [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour)?

[stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) only contains the CSS formatting rules. [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit) extends it, and additionally enforces the [SUIT naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). In most cases, you should use [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit), but if your project doesn't follow the SUIT naming scheme, then you can use [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) directly.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
