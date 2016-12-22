import { isGhPages } from './env.babel';

export const publicPath = isGhPages ? '/angular2/' : '/';
export const staticDir = './dist';

export default {
  publicPath,
  path: staticDir,
  filename: '[name].js',
  sourceMapFilename: 'maps/[file].map',
};
