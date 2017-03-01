import { publicPath } from '../utils.babel';
import { suffix } from '../output.config.babel';

export default env => ({
  filename: '[name].css?' + suffix,
  disable: false,
  allChunks: true,
  publicPath: publicPath(env),
});
