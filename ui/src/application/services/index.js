import angular from 'angular';
import HateoasService from './hateoas';

export default angular
  .module('bm.services', [])
  .service('HateoasService', HateoasService);
