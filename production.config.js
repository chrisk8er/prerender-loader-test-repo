const base = require('./base.js');
const objectAssign = require('object-assign');
const webpack = require('webpack');
const PATH = require('./build_path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = objectAssign(base, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/',
    path: PATH.ASSET_PATH,
    filename: '[name]_[chunkhash].js',
  },
});
Object.keys(config.entry).map(i => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: `!!prerender-loader?string&entry=${i}!${PATH.HTML_PATH}/template.html`,
      title: `${i}`,
      filename: `${i}.html`,
      hash: false,
      chunks: [i],
    }),
  );
});

module.exports = config;
