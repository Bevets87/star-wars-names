const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  devtool: 'none',
  mode: 'production',
  entry: path.join(process.cwd(), 'src', 'index.js'),
  target: 'node',
  output: {
    path: path.join(process.cwd(), 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'StarWarsNames',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
