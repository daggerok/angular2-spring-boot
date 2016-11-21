import {
  NoErrorsPlugin,
  ProvidePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ForkCheckerPlugin } from 'awesome-typescript-loader';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import { vendors } from './entry.babel';
import { extractCSS } from './module.babel';

const {
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
} = optimize;

export default [
  extractCSS,
  new OccurenceOrderPlugin(true),
  new CommonsChunkPlugin({
    name: vendors,
    filename: `${vendors}.js`,
    minChunks: Infinity,
  }),
  new NoErrorsPlugin(),
  new ForkCheckerPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: './src/assets/favicon.ico',
    template: './src/assets/index.html',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
  }),
];
