let webpack = require('webpack');
let webpackDevMiddleware = require('koa-webpack-dev-middleware');
let webpackHotMiddleware = require('koa-webpack-hot-middleware');

module.exports = app => {
    app.addSingleton('webpackMiddleware', webpackHot);
};

function webpackHot(config, app) {
    let compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}