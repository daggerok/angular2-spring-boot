export default isProdOrGhPages => ({
  // https://github.com/angular/angular/issues/10618
  mangle: { keep_fnames: true, },
  // include: resolve('./src'), option can be used only with already minified vendors
  compress: { warnings: false, },
  sourceMap: !isProdOrGhPages,
});
