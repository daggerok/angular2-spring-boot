import { isGhPages } from './env.babel';

export const publicPath = isGhPages ? '/angular2/' : '/';
export const staticDir = '../src/main/resources/static';

export default {
  publicPath,
  path: staticDir,
  filename: '[name].js',
  sourceMapFilename: '[file].map',
  chunkFilename: '[id].chunk.js',
  jsonpFunction: 'w'
};
