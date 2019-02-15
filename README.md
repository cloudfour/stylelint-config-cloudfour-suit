# stylelint-config-cloudfour-suit

[![NPM version](http://img.shields.io/npm/v/stylelint-config-cloudfour-suit.svg)](https://www.npmjs.org/package/stylelint-config-cloudfour-suit) [![Build Status](https://travis-ci.org/cloudfour/stylelint-config-cloudfour-suit.svg?branch=master)](https://travis-ci.org/cloudfour/stylelint-config-cloudfour-suit) [![Renovate Status](https://badges.renovateapi.com/github/cloudfour/stylelint-config-cloudfour-suit)](https://renovatebot.com/)

> A sharable stylelint config object that enforces [Cloud Four's CSS Standards](https://github.com/cloudfour/guides/tree/master/css) & [SUIT naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

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

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```js
{
  "extends": "stylelint-config-cloudfour",
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

-   [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour): A sharable stylelint config object that enforces [Cloud Four's CSS Standards](https://github.com/cloudfour/guides/tree/master/css)

### Plugins

-   [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern): Stylelint plugin that enforces SUIT naming convention (despite the name).

### What's the difference between [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit) and [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour)?

[stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) only contains the CSS formatting rules. [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit) extends it, and additionally enforces the [SUIT naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). In most cases, you should use [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit), but if your project doesn't follow the SUIT naming scheme, then you can use [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) directly.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
