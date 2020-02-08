# Contributing Guide

## Release Process

We use [npmpub](https://www.npmjs.com/package/npmpub) for releases.
To publish an updated version, follow these steps:

1.  Update `CHANGELOG.md` with the new version number and a list of relevant changes.
1.  Update the version number in `package.json`
1.  Commit your changes
1.  Run `npm run release`, which will run `npmpub`.

`npmpub` will handle the clean release, including running tests, adding a new
tag, publishing to npm, pushing commits and tags to GitHub, and adding a
GitHub release.
