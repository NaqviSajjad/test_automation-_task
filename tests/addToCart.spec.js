
const { test, expect } = require('@playwright/test');

import { AddToCartPage } from '../e2e/pages/addToCart';
import { LoginPage } from '../e2e/pages/login';
import * as data from '../testData/credentials.json'

test('Add to Cart', async ({ page }) => {
    const Login = new LoginPage(page)
    const AddToCart = new AddToCartPage(page)

    await Login.gotoLoginPage()
    await Login.loginAction(data[1].username, data[1].password)
    console.log('Logging in with credentials:', data[1].username, data[1].password); 
    await expect(Login.login_assertion).toBeVisible()
    await AddToCart.addToCartProcess() 
    console.log (AddToCart.listItemByText)
    //await expect(page).toHaveTitle("Dresses - My Shop")

  });