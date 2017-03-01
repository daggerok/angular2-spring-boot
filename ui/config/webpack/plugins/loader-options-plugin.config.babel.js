import { pathTo } from '../utils.babel';
import babel from './babel.config.babel';
import postcss from './postcss.config.babel';
import eslint from './eslint.config.babel';

export default env => ({
  options: {
    context: pathTo('.'),
    babel,
    postcss,
    eslint: eslint(env),
  },
  minimize: env === 'production',
  debug: env !== 'production',
});
