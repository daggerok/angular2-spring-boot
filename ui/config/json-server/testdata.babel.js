import { projects, _links, page } from './mocks';

export default () => ({
  "api/projects": {
    _embedded: {
      projects,
      _links,
      page,
    }
  }
});
