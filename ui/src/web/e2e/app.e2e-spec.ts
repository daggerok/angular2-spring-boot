import { Angular2Page } from './app.po';

describe('app ui-home h3', function() {
  let page: Angular2Page;

  beforeEach(() => {
    page = new Angular2Page();
  });

  it('should display message saying "hi, badass!"', () => {
    page.navigateTo();
    expect(page.getAppAngular2HomeH3Text()).toEqual('hi, badass!');
  });
});
