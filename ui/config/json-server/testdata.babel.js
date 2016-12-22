import { projects, _links, page } from './mocks';

export default () => ({
  "projects": {
    _embedded: {
      projects,
      _links,
      page,
    }
  }
});
