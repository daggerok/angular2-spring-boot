/**
 * Static analysis linter for TypeScript advanced options configuration
 * Description: An extensible linter for the TypeScript language.
 *
 * See: https://github.com/wbuchwalter/tslint-loader
 */

export default env => ({
  // resourcePath: pathTo('src'),

  // tslint errors are displayed by default as warnings
  // set emitErrors to true to display them as errors
  emitErrors: true,

  // tslint does not interrupt the compilation by default
  // if you want any file with tslint errors to fail
  // set failOnHint to true
  failOnHint: env !== 'development',

  // can specify a custom config file relative to current directory
  // 'tslint-custom.json'
  configFile: './config/tslint.json',

  // path to directory containing formatter (optional)
  formattersDirectory: 'node_modules/tslint-loader/formatters/',

  // These options are useful if you want to save output to files
  // for your continuous integration server
  fileOutput: {
    // The directory where each file's report is saved
    dir: './dist/tslint/',

    // The extension to use for each report's filename. Defaults to 'txt'
    ext: 'xml',

    // If true, all files are removed from the report directory at the beginning of run
    clean: true,

    // A string to include at the top of every report file.
    // Useful for some report formats.
    header: '<?xml version="1.0" encoding="utf-8"?><checkstyle version="5.7">\n',

    // A string to include at the bottom of every report file.
    // Useful for some report formats.
    footer: '</checkstyle>',
  },
});
