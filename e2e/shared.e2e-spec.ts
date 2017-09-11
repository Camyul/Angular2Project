import { browser, by, element } from 'protractor';
import { HomePage } from './shared.po';
import { protractor } from 'protractor/built/ptor';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('Should get correct page title', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('h1'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('h1'));
            expect(titleTag.getText()).toContain('Delicious Recipes');

        });
    });
  });

  it('Should get correct enjoy message', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('#enjoy'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('#enjoy'));
            expect(titleTag.getText()).toContain('Enjoy Our Recipes');

        });
    });
  });

  it('Should get correct Login button text', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('#login'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('#login'));
            expect(titleTag.getText()).toContain('Login');

        });
    });
  });

  it('Should get correct Author text from footer', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('#author'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('#author'));
            expect(titleTag.getText()).toContain('The Tranquil Gazelles');

        });
    });
  });

  it('Should get correct All Recipes link text from header', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('#allrecipes'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('#allrecipes'));
            expect(titleTag.getText()).toContain('All Recipes');

        });
    });
  });

  it('Should get correct Filter by Ingredient link text from header', () => {
    page.navigateTo();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('/home'), 10000).then(() => {

        browser.wait(EC.presenceOf(element(by.css('#filterby'))), 10000).then(() => {

            const titleTag = protractor.element(by.css('#filterby'));
            expect(titleTag.getText()).toContain('Filter by Ingredient');

        });
    });
  });

  // it('Should display the correct number of signed petitions', () => {
  //   page.navigateTo();
  //   const currentUrl = browser.driver.getCurrentUrl();

  //   page.fillEmail('kalin@test.com');
  //   page.fillPassword('123456');

  //   page.getLoginButton().click();

  //   const EC = protractor.ExpectedConditions;
  //   browser.wait(EC.urlContains('/home'), 10000).then(() => {

  //       page.nagivateToUserPage();

  //       browser.wait(EC.presenceOf(element(by.css('.my-petitions'))), 10000).then(() => {

  //           const elements = protractor.element.all(by.css('.my-petitions'));
  //           expect(elements.count()).toBe(1);

  //       });
  //   });
  // });

});
