const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'index.js'),
  ],
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=8192',
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
  },
  plugins: [
    new ExtractTextPlugin('[contenthash].css'),
    new HtmlWebpackPlugin({
      title: 'Simple app',
      filename: 'index.html',
      inject: false,
      template: 'index.hbs',
    }),
  ],
};
