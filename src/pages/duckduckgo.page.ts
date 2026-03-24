import { BasePage } from './base.page';
import { ActionUtils } from '../utils/action-utils';

export class DuckDuckGoPage extends BasePage {
  private searchInput = '//input[@id="search_form_input_homepage"]';
  private searchButton = '//input[@id="search_button_homepage"]';
  private resultsContainer = '//div[@id="links"]';
  private firstResult = '(//div[@id="links"]//h2)[1]';

  constructor() {
    super();
  }

  async navigateToHomePage() {
    await this.navigate('https://duckduckgo.com');
    await this.verifyPageTitleContains('DuckDuckGo');
  }

  async verifySearchInputField() {
    await ActionUtils.verifyElementPresent(this.searchInput);
    await ActionUtils.verifyElementVisible(this.searchInput);
    await ActionUtils.verifyElementEnabled(this.searchInput);
    await ActionUtils.verifyElementValue(this.searchInput, '');
  }

  async enterSearchText(text: string) {
    await ActionUtils.enterText(this.searchInput, text);
    await ActionUtils.verifyElementValue(this.searchInput, text);
  }

  async submitSearch() {
    await ActionUtils.pressEnter(this.searchInput);
  }

  async verifySearchResults(query: string) {
    await ActionUtils.verifyUrlContains(query);
    await ActionUtils.waitForElementVisible(this.resultsContainer);
    await ActionUtils.verifyElementPresent(this.firstResult);
    await ActionUtils.verifyElementTextContains(this.firstResult, query);
  }

  async clearAndSearchNewText(text: string) {
    await ActionUtils.clearText(this.searchInput);
    await this.enterSearchText(text);
    await this.submitSearch();
  }

  async verifyNoErrors() {
    await ActionUtils.verifyNoUnexpectedErrors();
  }
}
