export default {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  historyApiFallback: {
    index: '/'
  },
  proxy: {
    "/api": {
      target: "http://localhost:8080",
      secure: false
    }
  }
};
