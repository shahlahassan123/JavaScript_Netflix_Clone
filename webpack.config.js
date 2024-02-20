const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  // Other Webpack configurations...
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
