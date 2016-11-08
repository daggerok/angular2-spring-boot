import webpack from 'webpack';
import config from './commons/config.babel';

const vendors = 'vendors';

config.devtool = false;
config.output.sourceMapFilename = 'maps/[file].map';

config.plugins = [
  ...config.plugins,
  new webpack.optimize.CommonsChunkPlugin(
    /* chunkName= */ vendors,
    /* filename= */ `${vendors}.js`
  ),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      // https://github.com/angular/angular/issues/10618
      keep_fnames: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'ENV_NODE': JSON.stringify('production')
    }
  }),
];

export default config;
