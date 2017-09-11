import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

}
