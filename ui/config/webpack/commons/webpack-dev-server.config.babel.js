const proxy = () => ({
  target: "http://localhost:8080",
  changeOrign: false,
  secure: false,
});

export default {
  port: 8000,
  inline: true,
  progress: true,
  stats: 'minimal',
  historyApiFallback: {
    index: '/',
  },
  proxy: {
    "/api": proxy(),
    "/login": proxy(),
  },
};
