import { pathTo } from './utils.babel';

export default {
  extensions: [
    '.js',
    '.css',
    '.styl',
  ],
  modules: [
    pathTo('./src'),
    'node_modules',
  ],
};
