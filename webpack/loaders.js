var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  { test: /\.ts(x?)$/, loader: 'ts-loader' },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.scss$/, loader: 'style-loader!css!sass' }, 
  { test: /\.html$/, exclude: /node_modules/, loader: 'raw' }, 
  { test: /\.jade$/, loader: 'jade-loader' }, 
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' }, 
  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }, 
  { test: '\.jpg$', exclude: /node_modules/, loader: 'file' }, 
  { test: '\.png$', exclude: /node_modules/, loader: 'url' }
];