const { expect } = require("@playwright/test");
import * as data from '../../testData/credentials.json'



exports.RegisterPage = class RegisterPage {

    constructor(page) {

        this.page = page
        this.registerEmail = page.locator('#email_create')
        this.signIn = page.locator('[title = "Log in to your customer account"]')
        this.btn_create_account = page.locator('#SubmitCreate')
        this.assertion1 = page.locator('.page-heading').getByText("Authentication")
        this.assertion2 = page.locator('.page-heading').getByText("Create an account")
        this.assertion3 = page.locator('.page-subheading').getByText("Your personal information")
        this.errorMessage =  page.getByText('Authentication failed.')

        this.title = page.locator("#id_gender1")
        this.first_name = page.locator("#customer_firstname")
        this.last_name = page.locator("#customer_lastname")
        this.email = page.locator("#email")
        this.password = page.locator('#passwd')
        this.dob = page.locator()
        this.register = page.locator("#submitAccount")

    }

    async gotoRegisterPage(email){

        await this.page.goto('http://www.automationpractice.pl/index.php');
        await this.signIn.click();
    }

    async registrationProcess(registerEmail){

        if (typeof registerEmail !== 'string') {
            throw new Error('Email must be string');
        }
        await this.registerEmail.fill(registerEmail)
        await this.btn_create_account.click()
        
        await expect(this.page).toHaveURL("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account#account-creation")
        await expect(this.assertion2).toBeVisible(); 
        await expect(this.assertion3).toBeVisible();
        await this.selectGender(data[3].male)
        console.log(data[3].male)
        await this.first_name.fill(data[1].first_name)
        await this.last_name.fill(data[1].last_name)
        await this.last_name.fill(data[1].username)

        await this.register.click()
       
    }

    async showPasswordClick(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async selectGender(gender) {
        let genderRadio;
        
        if (gender === 'Mr.') {
          // Locate the male radio button by its id
          genderRadio = this.page.locator('#id_gender1')
          await genderRadio.click()
          await expect(genderRadio).toBeChecked();


        } else if (gender === 'Mrs.') {
          // Locate the female radio button by its id
          genderRadio = this.page.locator('#id_gender2');
          await genderRadio.click()
          await genderRadio.toBeChecked()  

        } else {
          throw new Error('Invalid gender specified. Only "male" and "female" are allowed.');
        }

    }
}