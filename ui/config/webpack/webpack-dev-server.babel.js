import {
  pathTo,
  publicPath,
} from './utils.babel';

const proxy = () => ({
  target: "http://localhost:8080",
  secure: true,
});

export default env => env === 'development' ? {
  port: 8000,
  inline: true,
  stats: 'minimal',
  proxy: { "/api": proxy(), },
  contentBase: pathTo('./src'),
  historyApiFallback: { index: publicPath(env), },
} : {};
