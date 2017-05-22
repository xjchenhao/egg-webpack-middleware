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


## 使用场景

Egg的`webppack`中间件，实现在local环境中，将js等静态资源运行在内存当中实现热替换的功能。

## 依赖说明

### 依赖的 egg 版本

egg-webpack-middleware 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
1. webpack
2. koa-webpack-dev-middleware
3. koa-webpack-hot-middleware

## 开启插件

```js
// {app_root}/config/plugin.js
exports.webpackMiddleware = {
  enable: true,
  package: 'egg-webpack-middleware',
};
```

```js
// {app_root}/config/config.local.js
let devConfig = require('./../config/webpack.config');  //webpack配置

exports.webpackMiddleware = devConfig;
```

## 详细配置

请到 [config/config.local.js](config/config.local.js) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/xjchenhao/egg-webpack-middleware/issues) 异步交流。

## License

[MIT](LICENSE)
