import faker from 'faker';

const size = 15;
const seq = Array(size).fill();

const categories = seq.map((_, id) => ({
  id,
  name: faker.name.title(),
}));

const bookmarks = categories.map(c => ({
  id: c.id,
  title: faker.name.findName(),
  url: faker.internet.url(),
  category: c.name,
}));

export default () => ({
  'categories': {
    _embedded: {
      categories,
      _links: [],
    },
  },
  'bookmarks': {
    _embedded: {
      bookmarks,
      _links: [],
    },
  },
});
