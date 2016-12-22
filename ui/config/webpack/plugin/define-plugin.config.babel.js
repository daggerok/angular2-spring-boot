export default (isProdOrGhPages) => ({
  'process.env': {
    'NODE_ENV': JSON.stringify(isProdOrGhPages ? 'production' : 'development'),
  },
});
