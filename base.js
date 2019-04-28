const webpack = require('webpack');
const path = require('path');
const PATH = require('./build_path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const ENTRY_LIST_OPTION = ['index', 'show'];
const entry = {};

ENTRY_LIST_OPTION.filter(i => {
  entry[i] = `${PATH.ROOT_PATH}/${i}.js`;
});
var config = (module.exports = {
  context: PATH.ROOT_PATH,
  entry,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'pre',
        enforce: 'post',
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
    new WebpackAssetsManifest({
      output: 'manifest.json',
    }),
  ],
});
