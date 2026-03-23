import { BasePage } from './base.page';
import { clickElement, enterText, verifyElement } from '../utils/action-utils';

export class AmazonPage extends BasePage {

    navigateToAmazon() {
        this.driver.get('https://www.amazon.com');
        verifyElement(this.driver, { xpath: "//title[contains(text(),'Amazon.com')]" });
    }

    searchProduct(productName: string) {
        enterText(this.driver, { xpath: "//input[@id='twotabsearchtextbox']" }, productName);
        clickElement(this.driver, { xpath: "//input[@id='nav-search-submit-button']" });
    }

    selectFirstNonSponsoredProduct() {
        clickElement(this.driver, { xpath: "(//div[@data-component-type='s-search-result']//h2/a)[1]" });
    }

    addToCart() {
        clickElement(this.driver, { xpath: "//input[@id='add-to-cart-button']" });
    }

    verifyCart(productName: string) {
        clickElement(this.driver, { xpath: "//a[@id='nav-cart']" });
        verifyElement(this.driver, { xpath: `//span[contains(text(),'${productName}')]` });
        verifyElement(this.driver, { xpath: "//span[@class='a-dropdown-prompt' and text()='1']" });
    }
}
