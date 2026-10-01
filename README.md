# stylelint-config-cloudfour-suit

[![NPM version](http://img.shields.io/npm/v/stylelint-config-cloudfour-suit.svg)](https://www.npmjs.org/package/stylelint-config-cloudfour-suit) [![Build Status](https://github.com/cloudfour/stylelint-config-cloudfour-suit/workflows/CI/badge.svg)](https://github.com/cloudfour/stylelint-config-cloudfour-suit/actions?query=workflow%3ACI)

## ⚠️ Deprecated

This package is no longer maintained and will not be updated for future versions of stylelint. It only added one rule on top of [`stylelint-config-cloudfour`](https://github.com/cloudfour/stylelint-config-cloudfour), so you can replace it with that config and the same rule in your own project.

To migrate, swap the dependencies:

```
npm uninstall stylelint-config-cloudfour-suit
npm install stylelint-config-cloudfour@10 stylelint-selector-bem-pattern@4 --save-dev
```

Then update your stylelint config to extend `stylelint-config-cloudfour` and add the SUIT naming rule:

```js
export default {
  extends: "stylelint-config-cloudfour",
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    // Enforce SUIT CSS naming conventions
    "plugin/selector-bem-pattern": {
      preset: "suit",
      utilitySelectors: "^.u-(sm-|md-|lg-|xl-)?([a-z0-9]*[a-zA-Z0-9]*)"
    }
  }
};
```

Your lint results will be the same as before. If your project no longer follows SUIT naming, you can leave out the `plugins` and `plugin/selector-bem-pattern` lines entirely.

See [#597](https://github.com/cloudfour/stylelint-config-cloudfour-suit/issues/597) for background.

---

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

[stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) only contains the CSS formatting rules. [stylelint-config-cloudfour-suit](https://github.com/cloudfour/stylelint-config-cloudfour-suit) extends it, and additionally enforces the [SUIT naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md). Since this package is deprecated, new projects should use [stylelint-config-cloudfour](https://github.com/cloudfour/stylelint-config-cloudfour) directly, adding the SUIT naming rule shown above if they need it.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
