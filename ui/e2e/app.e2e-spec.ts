import { CcPage } from './app.po';

describe('app cc-home h3', function() {
  let page: CcPage;

  beforeEach(() => {
    page = new CcPage();
  });

  it('should display message saying "hi, cc!"', () => {
    page.navigateTo();
    expect(page.getAppCcHomeH3Text()).toEqual('hi, cc!');
  });
});
