# WYcreative's Atlas

> ⚠️ This is a Work In Progress. Don't use this is production.

## Requirements

- [Node.js](https://nodejs.org/en/) 18.12 or later
- [npm](https://www.npmjs.com/) 8.6 or later
- [Gulp CLI](https://gulpjs.com/) 2.2 or later

## Installation

Due to this package being private, npm has to retrieve it from GitHub Packages registry instead of npm's.
For that to be possible, a [personal access token](https://github.com/settings/tokens) with `read:packages` scope is required. Read [GitHub's documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token) for additional information.

``` shell
npm install @wycreative/atlas
```

## Usage

### Generate an Atlas instance

``` js
import generateAtlas from '@wycreative/atlas';

import pkg from './package.json' assert {type: 'json'};
import atlas from './config/atlas.js';
import config from './config/index.js';

generateAtlas({
	package: pkg,
	atlas,
	config,
});
```

## API

### `generateAtlas(options)`

Generates an Atlas instance.

#### `options.package`

Type: `Object`

The `package.json` contents.

#### `options.atlas`

Type `Object`

The [Genesis](https://github.com/WYcreative/genesis)'s `config/*.js` export objects with Atlas configurations in a single object.

#### `options.config`

Type `Object`

The [Genesis](https://github.com/WYcreative/genesis)'s `config/index.js` export object with it's Gulp path configurations.

## Development

### Installation

With the repository cloned locally, open the terminal pointed to the repository's root and run:

``` shell
npm install
```

Then, to start the project, run:

``` shell
npm start
```

### Commands

Command | Description
---|---
`npm start` | Builds the project, starts the local server, and watches for changes.
`npm run serve` | Starts the local server and watches for changes.
`npm test` | Checks for code-style issues.
`npm run dist` | Prepares de built code for distribution.
`npm run clean` | Deletes the compiled code in `build` and `dist` directories.
`npm run prepublishOnly` | Runs the whole build and distribution process. This is intended to be used internally by npm when releasing a new package version.
`npm run release` | Runs the release workflow, including validating the codebase, running a clean build and distribution process, and releasing a new package version.
