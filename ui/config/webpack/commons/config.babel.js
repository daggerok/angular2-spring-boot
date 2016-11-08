import path from 'path';
import webpack from 'webpack';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractPlugin from 'extract-text-webpack-plugin';
import htmlWebpackPluginConfig from './html.config.babel';
import { ForkCheckerPlugin } from 'awesome-typescript-loader';

const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;

const resolve = (rel) => path.resolve(process.cwd(), rel);
const resources = resolve('./src/resources');
const include = resolve('./src');

export default {
  entry: {
    vendors: [
      './src/polyfills.ts',
      './src/vendors.ts',
    ],
    app: './src/main.ts',
  },
  output: {
    path: '../src/main/resources/static',
    filename: '[name].js',
  },
  module: {
    preLoaders: [{
      include,
      test: /\.js$/,
      loader: 'source-map',
    }],
    loaders: [
      {
        test: /\.ts$/,
        // loader: 'ts',
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
      },
      {
        include,
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'es2015',
          ],
          plugins: [
            'add-module-exports',
          ]
        }
      },
      {
        include,
        loader: 'json',
        test: /\.json$/,
      },
      {
        include,
        loader: 'raw',
        test: /\.html$/,
      },
      {
        test: /\.css$/,
        include: [
          resolve('./node_modules/angular'),
          resolve('./node_modules/bootstrap/dist'),
          include,
        ],
        loader: extractCSS.extract('style', 'css?importloader=1&sourceMap', 'postcss'),
      },
      {
        include,
        test: /\.styl$/,
        loader: extractCSS.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      {
        include: exclude,
        loader: 'file?name=vendors/[1]&regExp=node_modules/(.*)',
        test: assets,
      },
      {
        include: resources,
        loader: 'file?name=resources/[1]&regExp=src/resources/(.*)',
        test: assets,
      },
      {
        exclude: [exclude, resources],
        loader: 'file?name=[path]/[name].[ext]',
        test: assets,
      },
    ],
    noParse: [
      /.+zone\.js\/dist\/.+/,
      /.+angular2\/bundles\/.+/,
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    extractCSS,
    new webpack.NoErrorsPlugin(),
    new ForkCheckerPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginConfig),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginConfig,
      template: './src/assets/login.html',
      filename: 'login.html',
      chunks: ['vendors'],
    }),
  ],
  postcss: () => [
    autoprefixer,
    cssnano
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  }
};
