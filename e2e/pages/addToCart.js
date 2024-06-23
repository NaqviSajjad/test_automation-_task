const { expect } = require("@playwright/test");
exports.AddToCartPage = class AddToCartPage {
   
   
    constructor(page) {
        
        this.dressTab = page.getByRole('link', { name: 'Dresses', exact: true })
        this.dressPageAssert = page.locator(".category-name").getByText("Dresses")
        this.listItemByText = page.locator('text=Product available with different options').nth(0)
        this.listItem = page.locator('img[src="http://www.automationpractice.pl/img/p/1/0/10-home_default.jpg"]')
        this.pinkColor = page.locator("#color_24")
        this.btnAddToCart = page.locator("#add_to_cart")
        this.prdtAddAssert = page.getByText("Product successfully added to your shopping cart")
        //getByRole('heading', { text: "Product successfully added to your shopping cart" })
        this.proceedToCheckout = page.getByTitle("Proceed to checkout")
        this.btnproceedToCheckout = page.getByRole('link', { name: 'Proceed to checkout'}).filter({ title: 'Proceed to checkout' })
        this.cartTitle = page.locator("#cart_title").getByText("Shopping-cart summary")
        this.assertText1 = page.getByText("To add a new address, please fill out the form below.")
        this.registerForm = page.locator("#add_address")
        
        
    }

    async addToCartProcess(){

        await this.dressTab.click()
        await expect(this.dressPageAssert).toBeVisible()
        await expect(this.listItem).toBeVisible()
        await this.listItem.click()
        await this.pinkColor.click()
        await expect(this.btnAddToCart).toBeVisible()
        await this.btnAddToCart.click()
        await expect(this.prdtAddAssert).toBeVisible()
        await expect(this.proceedToCheckout).toBeVisible()
        await this.proceedToCheckout.click()
        await expect(this.cartTitle).toBeVisible()
        await expect(this.btnproceedToCheckout).toBeVisible()
        await this.btnproceedToCheckout.click()
        // await expect(page.getByText("Your addresses")).toBeVisible()
        await expect(this.assertText1).toBeVisible()
        await expect(this.registerForm).toBeVisible()


    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}