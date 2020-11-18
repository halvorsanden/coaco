const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './chocolator'),
    filename: 'bundle.js',
    chunkFilename: 'chunk[id].js',
    publicPath: ASSET_PATH
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './chocolator'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        loader: 'svelte-loader',
        options: {
          emitCss: true,
          hotReload: true
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Chocolator',
      files: {
        css: 'bundle.css',
        js: 'bundle.js'
      },
      themeColour: '#ecf2f7',
      lang: 'en',
      minify: true,
      hash: true,
      inject: false
    })
  ]
}
