import {
  NoErrorsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

import { vendors } from './entry.babel';
import { extractCSS } from './module.babel';
import { isProdOrGhPages } from './env.babel';
import commonsChunkPluginVendorConfig from './plugin/commons-chunk-plugin/vendors.config.babel';
import compressionWebpackPluginConfig from './plugin/compression-webpack-plugin.config.babel';
import definePluginConfig from './plugin/provide-plugin.config.babel';
import htmlWebpackPluginConfig from './plugin/html-webpack-plugin.config.babel';
import providePluginConfig from './plugin/provide-plugin.config.babel';
import uglifyJsPluginConfig from './plugin/uglify-js-plugin.config.babel';

const {
  AggressiveMergingPlugin,
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
  DedupePlugin,
} = optimize;

const prodPlugins = !isProdOrGhPages ? [] : [
    new DedupePlugin(),
    new AggressiveMergingPlugin(),
    new UglifyJsPlugin(uglifyJsPluginConfig),
    new CompressionWebpackPlugin(compressionWebpackPluginConfig),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
    new CommonsChunkPlugin(commonsChunkPluginVendorConfig(vendors, '[name].js')),
];

export default [
  extractCSS,
  new OccurenceOrderPlugin(true),
  new ProvidePlugin(providePluginConfig()),
  isProdOrGhPages ? undefined : new NoErrorsPlugin(),
  new DefinePlugin(definePluginConfig()),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig(isProdOrGhPages)),
  ...prodPlugins,
].filter(plugin => !!plugin);
