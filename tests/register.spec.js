const { test, expect } = require('@playwright/test');

import { RegisterPage } from '../e2e/pages/register';
import * as data from '../testData/credentials.json'

test('Create Account', async ({ page }) => {
    const Register = new RegisterPage(page)
    await Register.gotoRegisterPage()
    await expect(Register.assertion1).toBeVisible()

    await Register.registrationProcess(data[1].username)
    console.log('Register credentials:', data[1].username);

  


});