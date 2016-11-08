import { browser, element, by } from 'protractor';

export class CcPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppCcHomeH3Text() {
    return element(by.css('app cc-home h3')).getText();
  }
}
