import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import {
  pathTo,
  minimize,
} from './utils.babel';

const include = pathTo('./src');
const resources = pathTo('./src/assets');

export const exclude = /\/(node_modules|bower_components)\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/i;

const cssLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  use: `css-loader?importLoader=1${minimize(env)}!postcss-loader?sourceMap=inline`,
});

const stylusLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  use: `css-loader?importLoader=2${minimize(env)}!postcss-loader?sourceMap=inline!stylus-loader`,
});

export default env => ({
  rules: [
    {
      include,
      enforce: 'pre',
      test: /\.ts$/i,
      loader: 'tslint-loader'
    },
    {
      test: /\.ts$/i,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader',
      ],
    },
    {
      include,
      test: /\.js$/i,
      loader: 'source-map-loader',
    },
    {
      include,
      test: /\.js$/i,
      loader: 'babel-loader',
      options: {
        presets: [
          // [ 'es2015', { modules: 'commonjs' } ], // can be false or amd, umd, systemjs, commonjs
          [ 'es2015', { modules: false } ],
          'stage-0',
        ],
        plugins: [
          'add-module-exports',
          'syntax-dynamic-import',
          'transform-class-properties',
        ],
      }
    },
    {
      include,
      test: /\.html$/i,
      loader: 'raw-loader',
    },
    {
      test: /\.css$/i,
      use: cssLoader(env),
    },
    {
      test: /\.styl$/i,
      include: [
        include,
        pathTo('./node_modules/angular/'),
        pathTo('./node_modules/bootstrap/'),
        pathTo('./node_modules/bootswatch/'),
        pathTo('./node_modules/normalize.css/'),
      ],
      use: stylusLoader(env),
    },
    {
      test: assets,
      include: exclude,
      loader: 'file-loader?name=vendors/[1]&regExp=node_modules/(.*)',
    },
    {
      test: assets,
      include: resources,
      loader: 'file-loader?name=resources/[1]&regExp=src/assets/(.*)',
    },
    {
      exclude: [
        exclude,
        resources,
      ],
      loader: 'file-loader?name=[path]/[name].[ext]',
      test: assets,
    },
  ],
  noParse: [
    /.+zone\.js\/dist\/.+/,
    /.+angular2\/bundles\/.+/,
  ]
});
