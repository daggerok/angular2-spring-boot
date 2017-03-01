import CopyWebpackPlugin from 'copy-webpack-plugin';

export default new CopyWebpackPlugin([
  { from: './src/static', to: 'static' },
]);
