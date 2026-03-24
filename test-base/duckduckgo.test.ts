import { DuckDuckGoPage } from '../src/pages/duckduckgo.page';

const duckDuckGoPage = new DuckDuckGoPage();

describe('DuckDuckGo Search Functionality', () => {
  it('should load the DuckDuckGo homepage and verify the title', async () => {
    await duckDuckGoPage.navigateToHomePage();
  });

  it('should verify the search input field is present, visible, enabled, and empty', async () => {
    await duckDuckGoPage.verifySearchInputField();
  });

  it('should enter "Selenium" into the search input field and verify the value', async () => {
    await duckDuckGoPage.enterSearchText('Selenium');
  });

  it('should submit the search using the ENTER key', async () => {
    await duckDuckGoPage.submitSearch();
  });

  it('should verify the URL updates with the search query and results are displayed', async () => {
    await duckDuckGoPage.verifySearchResults('Selenium');
  });

  it('should clear the search input, enter "Playwright", and submit the search', async () => {
    await duckDuckGoPage.clearAndSearchNewText('Playwright');
  });

  it('should verify the search results update for "Playwright"', async () => {
    await duckDuckGoPage.verifySearchResults('Playwright');
  });

  it('should verify no unexpected errors occur and the page remains responsive', async () => {
    await duckDuckGoPage.verifyNoErrors();
  });
});
