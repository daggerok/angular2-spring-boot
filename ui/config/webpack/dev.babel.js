import config from './commons/config.babel';
import devServer from './commons/webpack-dev-server.config.babel';

export default {
  ...config,
  devServer,
  devtool: '#source-map',
  // devtool: 'cheap-module-eval-source-map',
};
