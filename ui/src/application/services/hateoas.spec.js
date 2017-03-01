'use strinct';

beforeEach(module('app'));

describe('test HateoasService', () => {

  let $window, HateoasService, sandbox;

  beforeEach(inject((_$window_, _HateoasService_) => {
    $window = _$window_;
    HateoasService = _HateoasService_;
    sandbox = sinon.sandbox.create();
  }));

  afterEach(() => {
    sandbox.restore();
  });

  it('$window.location.href', () => {
    expect($window.location.href).toEqual('http://localhost:9876/');
  });

  it('.bookmarks()', () => {
    const expected = ['1', '2', '3'];
    const req = { data: { _embedded: { bookmarks: expected } } };
    expect(HateoasService.bookmarks(req)).toEqual(expected);
    expect(HateoasService.bookmarks({ invalid_data: 'ololo' })).toEqual([]);
  });

  it('.bookmarks() mock', () => {
    const expected = [1, 2, 3, 'mock'];
    sandbox.stub(HateoasService, 'bookmarks').returns(expected);
    expect(HateoasService.bookmarks()).toEqual(expected);
  });
});
