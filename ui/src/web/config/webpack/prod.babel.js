import {
  optimize,
  DefinePlugin,
} from 'webpack';
const {
  UglifyJsPlugin,
  DedupePlugin,
} = optimize;
import config from './common/config.babel';

//config.devtool = false;
config.plugins = [
  ...config.plugins,
  new DedupePlugin(),
  new UglifyJsPlugin({
    // https://github.com/angular/angular/issues/10618
    mangle: { keep_fnames: true },
  }),
  new DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') },
  }),
];

export default config;
