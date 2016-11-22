var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var port = 3003;
var host = 'localhost';
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {color: true},
    historyApiFallback: true,
}).listen(port, host, function (err, result) {
    if (err) {
        console.error(err);
    }
    console.log('Listening at' + host + ': ' + port);
});
