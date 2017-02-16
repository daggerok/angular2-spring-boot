import { jsonEnv } from '../utils.babel';

export default env => ({
  'process.env': {
    NODE_ENV: jsonEnv(env),
    DEVELOPMENT: env === 'development',
  },
});
