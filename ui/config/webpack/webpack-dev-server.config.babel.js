import {
  pathTo,
  publicPath,
} from './utils.babel';

export default env => env === 'development' ? {
  port: 8000,
  inline: true,
  stats: 'minimal',
  contentBase: pathTo('./src'),
  historyApiFallback: { index: publicPath(env), },
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      secure: true,
    },
  }
} : {};
