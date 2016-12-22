import { browser, element, by } from 'protractor';

export class Angular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getAppAngular2HomeH3Text() {
    return element(by.css('app a2sb-home h3')).getText();
  }
}
