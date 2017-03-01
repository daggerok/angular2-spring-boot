export default ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  //$locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
};
