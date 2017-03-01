export default class BookmarkModel {
  constructor($http, $log, HateoasService) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this.HateoasService = HateoasService;
  }

  getBookmarks() {
    return this.$http.get(BookmarkModel.uri()).then(
      ok => this.HateoasService.bookmarks(ok),
      this.$log.error
    );
  }

  static uri() {
    return '/api/bookmarks';
  }
}
