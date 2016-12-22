import { resolve } from 'path';
import ExtractPlugin from 'extract-text-webpack-plugin';
import { isProdOrGhPages } from './env.babel';

const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/i;
const pathTo = (rel) => resolve(process.cwd(), rel);
const resources = pathTo('./src/assets');
const include = pathTo('./src');

export const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

export default {
  preLoaders: [
    isProdOrGhPages ? undefined : {
      include,
      test: /\.ts$/i,
      loader: 'tslint-loader',
    },
    {
      include,
      test: /\.js$/i,
      loader: 'source-map-loader',
    },
  ].filter(preLoader => !!preLoader),
  loaders: [
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
      loader: 'babel-loader',
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
      loader: 'raw-loader',
      test: /\.html$/i,
    },
    {
      test: /\.css$/i,
      include: [
        pathTo('./node_modules/angular'),
        pathTo('./node_modules/bootstrap/dist'),
        include,
      ],
      loader: extractCSS.extract('style-loader', `css-loader?importLoader=1${isProdOrGhPages ? '' : '&sourceMap'}`, 'postcss-loader'),
    },
    {
      include,
      test: /\.styl$/i,
      loader: extractCSS.extract('style-loader', `css-loader!postcss-loader!stylus-loader${isProdOrGhPages ? '' : '?sourceMap'}`),
    },
    {
      include: exclude,
      loader: 'file-loader?name=vendors/[1]&regExp=node_modules/(.*)',
      test: assets,
    },
    {
      include: resources,
      loader: 'file-loader?name=resources/[1]&regExp=src/assets/(.*)',
      test: assets,
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
};
