
const { test, expect } = require('@playwright/test');

import { LoginPage } from '../e2e/pages/login';
import * as data from '../testData/credentials.json'


test('Login with valid credentials', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.loginAction(data[1].username, data[1].password)
  console.log('Logging in with credentials:', data[1].username, data[1].password); 
  await expect(Login.login_assertion).toBeVisible() 
});

test('Login with invalid credentials', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.loginAction(data[1].username, data[1].password)
  await expect(Login.errorMessage).toBeVisible()
});

// test('Show password', async ({ page }) => {
//   const Login = new LoginPage(page)
//   await Login.gotoLoginPage()
//   expect(Login.password).toHaveAttribute("placeholder", "Enter your password")
//   await Login.showPasswordClick('NEAR_ROSE_1', 'Test12345!')
//   expect(await page.getByLabel('Show password').isChecked()).toBeFalsy()
//   console.log('After entering data: ' + await Login.password.inputValue());
//   await Login.showPassword.click()
//   expect(await page.getByLabel('Show password').isChecked()).toBeTruthy()
//   await Login.login.click()
// });

test('Verify Page title', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await expect(page).toHaveTitle(/.*Login - My Shop/);
});



// test(`Approval`, async ({ request, baseURL }) => {
//   const response = await request.post(`${baseURL}/api/v4/projects/`+data[2].projectID+`/trigger/pipeline`, {
//       headers: {
//           Accept: "*/*",
//           ContentType: "multipart/form-data",
//         },
//       multipart: {
//           "token": data[2].token,
//           "ref": data[2].reference,
//       }
//     })
//     console.log(data[2].token)
//     console.log(await response.json());
//     expect(response.status()).toBe(201);
//     const respbody = await response.text();
//     const parsedResp = JSON.parse(respbody)
//     console.log(parsedResp);
//   })