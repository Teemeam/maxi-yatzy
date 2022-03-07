const path = require('path');
const webpack = require('webpack');

/* Webpack plugins */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  mode: env,
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader'
      },
      /* All jpgs to dist/img/print folder */
      {
        test: /\.(jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  /* Minify JS */
  ...(env === 'production' ? {
    optimization: {
      minimizer: [
        (compiler) => {
          new TerserPlugin({
            parallel: true,
            sourceMap: false,
            terserOptions: {
              ecma: 5,
            },
          }).apply(compiler);
        },
      ],
      moduleIds: 'named',
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        name: 'vendors',
      }
    }
  } : {}),
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/html/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        /* Move favicon files to dist folder */
        {
          from: 'src/img/favicon',
          to: 'img/favicon/'
        },
        /* Move share image to dist folder */
        {
          from: 'share.jpg',
          to: ''
        }
      ]
    })
  ]
});

