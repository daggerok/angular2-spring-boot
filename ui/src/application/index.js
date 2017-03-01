import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ModelsModule from './models';
import ServicesModule from './services';
import ComponentsModule from './components';

const application = angular.module('app', [
  uiRouter,
  ModelsModule.name,
  ServicesModule.name,
  ComponentsModule.name,
]);

// just for karma testing weh error about tag base is required occurs:
if (process && process.env && process.env.DEVELOPMENT) {
  require('./infrastructure/base.href.config');
}

import Config from './infrastructure/application.config';

application.config(['$urlRouterProvider', '$locationProvider', Config]);

export default application;
