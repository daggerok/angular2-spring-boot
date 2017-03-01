export default class CategoryModel {
  constructor($http, $log, HateoasService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.HateoasService = HateoasService;
  }

  getCategories() {
    return this.$http.get(CategoryModel.uri()).then(
      ok => this.HateoasService.categories(ok),
      this.$log.error
    );
  }

  static uri() {
    return '/api/categories';
  }
}
