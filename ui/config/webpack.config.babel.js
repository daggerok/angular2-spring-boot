// // eprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
// // parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
// process.traceDeprecation = true;

import entry from './webpack/entry.config.babel';
import output from './webpack/output.config.babel';
import module from './webpack/module.config.babel';
import resolve from './webpack/resolve.config.babel';
import plugins from './webpack/plugins.config.babel';
import devServer from './webpack/webpack-dev-server.config.babel';
import watchOptions from './webpack/watch-options.config.babel';
import node from './webpack/node.config.babel';

export default env => ({
  entry,
  output: output(env),
  module: module(env),
  resolve,
  plugins: plugins(env),
  devtool: env === 'development' ? 'eval' : 'source-map',
  devServer: devServer(env),
  watchOptions,
  profile: 'web',
  bail: true,
  node,
});
