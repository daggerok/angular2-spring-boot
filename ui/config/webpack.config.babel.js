import entry from './webpack/entry.babel';
import output from './webpack/output.babel';
import module from './webpack/module.babel';
import resolve from './webpack/resolve.babel';
import plugins from './webpack/plugins.babel';
import node from './webpack/node.babel';
import watchOptions from './webpack/watch-options.babel';
import devServer from './webpack/webpack-dev-server.babel';

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
