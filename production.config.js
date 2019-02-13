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
      // template: PATH.HTML_PATH + '/layout.html',
      template: `!!prerender-loader?string!${PATH.HTML_PATH}/layout.html`,
      // template: `!!prerender-loader?string!${PATH.HTML_PATH}/templates/layout-${i}.html`,
      // template: `!!prerender-loader?${JSON.stringify({ string: true, params: { url: `/${i}/` } })}!${PATH.HTML_PATH}/templates/layout-${i}.html`,
      title: '',
      filename: `${i}.html`,
      id: i,
      hash: false,
      chunks: [i],
    }),
  );
});

module.exports = config;
