export default {
  asset: "[path].gz?[query]", // default: [path].gz[query]
  algorithm: "gzip", // zlib, zopfli, function(buf, callback)
  // test: /\.(js|css|html)$/i, // default: every assets
  // threshold: 10240, // default: 0
  // minRatio: 0.8 // default: Only assets that compress better that ratio: 0.8
};
