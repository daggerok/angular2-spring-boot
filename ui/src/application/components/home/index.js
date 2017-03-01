import angular from 'angular';

import Config from './home.component.config';
import Component from './home.component';

export default angular
  .module('app-home.component', [])
  .component('appHome', Component)
  .config(['$stateProvider', Config]);
