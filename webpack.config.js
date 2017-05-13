const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GlobalizeWebpackPlugin = require('globalize-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, './app'),
  entry: {
    main: './app/main.js',
    vendor: [
      'globalize',
      'globalize/dist/globalize-runtime/number',
      'globalize/dist/globalize-runtime/currency',
      'globalize/dist/globalize-runtime/date',
      'globalize/dist/globalize-runtime/message',
      'globalize/dist/globalize-runtime/plural',
      'globalize/dist/globalize-runtime/relative-time',
      'globalize/dist/globalize-runtime/unit'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: 'index.html'
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    new GlobalizeWebpackPlugin({
      production: true,
      developmentLocale: 'en',
      supportedLocales: [ 'en', 'de' ],
      messages: 'app/i18n/[locale].json',
      output: 'i18n/[locale].js'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  }
}
