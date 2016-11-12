import {
  optimize,
  DefinePlugin
} from "webpack";

import config from "./commons/config.babel";

config.devtool = false;
config.output.sourceMapFilename = 'maps/[file].map';

config.plugins = [
  ...config.plugins,
  new optimize.DedupePlugin(),
  new optimize.UglifyJsPlugin({
    mangle: {
      // https://github.com/angular/angular/issues/10618
      keep_fnames: true
    }
  }),
  new DefinePlugin({
    'process.env': {
      'ENV_NODE': JSON.stringify('production')
    }
  }),
];

export default config;
