const { expect } = require('@playwright/test');
const { assert } = require('console');

class AddToCartPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      dressTab: page.locator('role=link[name="Dresses"]'),
      dressPageAssert: page.locator('.category-name:text("Dresses")'),
      listItemByText: page.locator('text=Product available with different options').nth(0),
      listItem: page.locator('img[src="http://www.automationpractice.pl/img/p/1/0/10-home_default.jpg"]'),
      pinkColor: page.locator('#color_24'),
      btnAddToCart: page.locator('#add_to_cart'),
      prdtAddAssert: page.locator('text=Product successfully added to your shopping cart'),
      proceedToCheckout: page.locator('#layer_cart a[title="Proceed to checkout"]'),
      btnProceedToCheckout: page.locator('#center_column a[title="Proceed to checkout"]'),
      cartTitle: page.locator('#cart_title:text("Shopping-cart summary")'),
      assertText1: page.locator('text=To add a new address, please fill out the form below.'),
      registerForm: page.locator('#add_address'),
      verifyCartElementQuantity: page.locator('#summary_products_quantity')
    };
  }

  async addToCartProcess() {
    await this.selectors.dressTab.click();
    await expect(this.selectors.dressPageAssert).toBeVisible();
    await expect(this.selectors.listItem).toBeVisible();

    // Scroll into view and force click
    await this.selectors.listItem.scrollIntoViewIfNeeded();
    await this.page.evaluate((element) => element.click(), await this.selectors.listItem.elementHandle());

    await this.selectors.pinkColor.click();
    await expect(this.selectors.btnAddToCart).toBeVisible();
    await this.selectors.btnAddToCart.click();
    await expect(this.selectors.prdtAddAssert).toBeVisible();
    await expect(this.selectors.proceedToCheckout).toBeVisible();
    await this.selectors.proceedToCheckout.click();
    await expect(this.selectors.cartTitle).toBeVisible();
    await expect(this.selectors.btnProceedToCheckout).toBeVisible();
    await this.selectors.btnProceedToCheckout.click();
    await this.selectors.btnProceedToCheckout.click();
  }
}

module.exports = { AddToCartPage };
