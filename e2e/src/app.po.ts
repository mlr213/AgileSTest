import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getSearchButton() {
    return element(by.name('btnSearch'));
  }
  getCityInputControl() {
    return element(by.name('city'));
  }
  getTableRows(){
    return  element.all(by.css('tbody tr')) 
  }
 

}
