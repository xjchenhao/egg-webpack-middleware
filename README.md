# egg-webpack-middleware

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-webpack-middleware.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-webpack-middleware
[travis-image]: https://img.shields.io/travis/eggjs/egg-webpack-middleware.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-webpack-middleware
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-webpack-middleware.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-webpack-middleware?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-webpack-middleware.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-webpack-middleware
[snyk-image]: https://snyk.io/test/npm/egg-webpack-middleware/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-webpack-middleware
[download-image]: https://img.shields.io/npm/dm/egg-webpack-middleware.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-webpack-middleware

<!--
Description here.
-->

## Install

```bash
$ npm i egg-webpack-middleware --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.webpackMiddleware = {
  enable: true,
  package: 'egg-webpack-middleware',
};
```

## Configuration

```js
// {app_root}/config/config.local.js
let devConfig = require('./../config/webpack.config');  //webpack配置

exports.webpackMiddleware = devConfig;
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
