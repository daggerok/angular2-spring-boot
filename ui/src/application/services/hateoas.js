export default class HateoasService {
  constructor() {
    this.embed = (resp) => ((resp || {}).data || {})._embedded || {};
  }

  bookmarks(resp) {
    return this.embed(resp).bookmarks || [];
  }

  categories(resp) {
    return this.embed(resp).categories || [];
  }
}
