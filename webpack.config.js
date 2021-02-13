const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: './client/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

  plugins: [new webpack.ProgressPlugin()],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'client')],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    }, {
      test: /.css$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  }
}