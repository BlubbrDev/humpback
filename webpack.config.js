var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Blubbr.tsx',
  output: {
      path: path.resolve('lib'),
      filename: 'Blubbr.js',
      libraryTarget: 'commonjs2'
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              exclude: /(node_modules)/,
              use: 'babel-loader'
          }
      ]
  }
}