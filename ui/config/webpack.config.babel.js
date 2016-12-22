import entry from './webpack/entry.babel';
import output from './webpack/output.babel';
import module from './webpack/module.babel';
import resolve from './webpack/resolve.babel';
import plugins from './webpack/plugins.babel';
import postcss from './webpack/postcss.babel';
import tslint from './webpack/tslint.babel';
import node from './webpack/node.babel';
import watchOptions from './webpack/watch-options.babel';
import devServer from './webpack/webpack-dev-server.babel';
import {
  isDev,
  isProdOrGhPages,
} from './webpack/env.babel';

export default {
  entry,
  output,
  module,
  resolve,
  plugins,
  postcss,
  tslint,
  node,
  watchOptions,
  profile: 'web',
  devServer: isDev ? devServer : isDev,
  devtool: isProdOrGhPages ? '#source-map' : '#eval',
};
