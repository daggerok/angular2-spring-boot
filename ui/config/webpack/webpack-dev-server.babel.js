import { publicPath } from './output.babel';

const proxy = () => ({
  target: "http://localhost:8080",
  secure: true,
});

const devServer = {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  contentBase: './src',
  proxy: { "/api": proxy(), },
  historyApiFallback: { index: publicPath, },
};

export default devServer;
