import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should able to locate controls on page', () => {
  
   expect(page.getSearchButton()).toBeTruthy();
   expect(page.getCityInputControl()).toBeTruthy();
  });

  it('should display weather results table by entering city and clicking on search button', () => {
    page.getCityInputControl().sendKeys('London');
    page.getSearchButton().click();
    page.getTableRows().then(rows=>{
      expect(rows.length).toEqual(1);   
    })
   });
   it('should contain a button disabled as default', function() {
    const button = page.getSearchButton();
    expect(button.isPresent()).toBe(true);
    expect(button.getAttribute('disabled')).toBeDefined();
    expect(button.getText()).toEqual('Search');
  });

  it('should get button enable when input is not empty', function() {
    const input = page.getCityInputControl();
    const button = page.getSearchButton();
    input.sendKeys('London');
    expect(button.getAttribute('disabled')).toBeNull();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
