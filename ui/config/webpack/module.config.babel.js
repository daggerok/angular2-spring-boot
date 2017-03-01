import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import {
  pathTo,
  minimize,
  publicPath,
} from './utils.babel';

const include = pathTo('./src');
const resources = pathTo('./src/resources');

export const exclude = /\/(node_modules|bower_components)\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/i;

const cssLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  publicPath: publicPath(env),
  use: `css-loader?importLoader=1${minimize(env)}!postcss-loader?sourceMap=inline`,
});

const stylusLoader = env => ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  publicPath: publicPath(env),
  use: `css-loader?importLoader=2${minimize(env)}!postcss-loader?sourceMap=inline!stylus-loader`,
});

const options = {
  presets: [
    // [ 'es2015', { modules: 'commonjs' } ], // can be false or amd, umd, systemjs, commonjs
    [ 'es2015', { modules: false } ],
    'stage-0',
  ],
  plugins: [
    'add-module-exports',
    'syntax-dynamic-import',
  ],
};

export default env => ({
  rules: [
    {
      include,
      enforce: 'pre',
      test: /\.js$/i,
      loader: 'source-map-loader',
    },
    {
      exclude,
      enforce: 'pre',
      test: /\.js$/i,
      loader: 'eslint-loader',
    },
    {
      exclude: [
        exclude,
        include,
      ],
      test: /\.js$/i,
      loader: 'babel-loader',
      options,
    },
    {
      include,
      test: /src.*\.js$/i,
      use: [
        { loader: 'ng-annotate-loader', },
        { loader: 'babel-loader', options, },
      ],
    },
    {
      test: /\.html$/i,
      loader: 'ng-cache-loader?prefix=[dir]/[dir]',
      include: pathTo('./src/application'),
    },
    {
      test: /\.css$/i,
      include: [
        include,
        pathTo('./node_modules/semantic-ui-css/'),
        pathTo('./node_modules/normalize.css/'),
        pathTo('./node_modules/bootstrap/dist/css/'),
        pathTo('./node_modules/bootswatch/'),
        pathTo('./node_modules/angular-material/'),
        pathTo('./node_modules/angular/'),
      ],
      use: cssLoader(env),
    },
    {
      include,
      test: /\.styl$/i,
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
      loader: 'file-loader?name=resources/[1]&regExp=src/resources/(.*)',
    },
    {
      exclude: [exclude, resources],
      loader: 'file-loader?name=[path]/[name].[ext]',
      test: assets,
    },
  ],
});
