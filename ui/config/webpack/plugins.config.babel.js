import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin,
  ProvidePlugin,
  DefinePlugin,
  optimize,
} from 'webpack';

const {
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin,
} = optimize;

import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import CopyWebpackPlugin from './plugins/copy-webpack-plugin.babel';
import uglifyJsPluginConfig from './plugins/uglify-js-plugin.config';
import compressionWebpackPluginConfig from './plugins/compression-webpack-plugin.config.babel';
import commonsChunkPluginConfig from './plugins/commons-chunk-plugin.config.babel';
import scriptExtHtmlWebpackPluginConfig from './plugins/script-ext-html-webpack-plugin.config.babel';
import extractTextWebpackPluginConfig from './plugins/extract-text-webpack-plugin.config.babel';
import providePluginConfig from './plugins/provide-plugin.config.babel';
import definePluginConfig from './plugins/define-plugin.config.babel';
import htmlWebpackPluginConfig from './plugins/html-webpack-plugin.config.babel';
import baseHrefWebpackPluginConfig from './plugins/base-href-webpack-plugin.config.babel';
import loaderOptionsPluginConfig from './plugins/loader-options-plugin.config.babel';

export default env => [
  CopyWebpackPlugin,
  new ProgressBarWebpackPlugin(),
  new ProvidePlugin(providePluginConfig),
  new DefinePlugin(definePluginConfig(env)),
  new CommonsChunkPlugin(commonsChunkPluginConfig),
  new HtmlWebpackPlugin(htmlWebpackPluginConfig(env)),
  new LoaderOptionsPlugin(loaderOptionsPluginConfig(env)),
  new BaseHrefWebpackPlugin(baseHrefWebpackPluginConfig(env)),
  new ExtractTextWebpackPlugin(extractTextWebpackPluginConfig(env)),
  env === 'development' ? new NoEmitOnErrorsPlugin() : undefined,
  env !== 'development' ? new AggressiveMergingPlugin() : undefined,
  env !== 'development' ? new UglifyJsPlugin(uglifyJsPluginConfig) : undefined,
  env !== 'development' ? new CompressionWebpackPlugin(compressionWebpackPluginConfig) : undefined,
  env !== 'development' ? new ScriptExtHtmlWebpackPlugin(scriptExtHtmlWebpackPluginConfig) : undefined,
].filter(plugin => !!plugin);
