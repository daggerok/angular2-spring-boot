import angular from 'angular';

import Config from './app.component.config';
import Component from './app.component';
import HomeModule from './home';

// root component:
const app = angular.module('app.component', [
  HomeModule.name
]);

app.component('app', Component);
app.config(['$stateProvider', Config]);

export default app;
