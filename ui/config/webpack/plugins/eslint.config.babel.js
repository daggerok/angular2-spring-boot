export default env => ({
  emitError: env != 'development',
  failOnError: env != 'development',

  emitWarning: env != 'development',
  failOnWarning: env != 'development',

  configFile: './config/.eslintrc.js',
  // several examples !

    // community formatter
  formatter: require('eslint-friendly-formatter'),

  // // default value
  // formatter: require('eslint/lib/formatters/stylish'),
  //
  // // custom formatter
  // formatter: function(results) {
  //   // `results` format is available here
  //   // http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()
  //
  //   // you should return a string
  //   // DO NOT USE console.*() directly !
  //   return 'OUTPUT';
  // },

  outputReport: {
    filePath: './dist/checkstyle.xml',
    formatter: require('eslint/lib/formatters/checkstyle')
  }
});
