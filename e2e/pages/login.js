const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username = page.locator('#email');
        this.password = page.locator('#passwd');
        this.signIn = page.locator('[title = "Log in to your customer account"]');
        this.login_assertion = page.locator('.page-heading').getByText("My account");

        this.login = page.locator('#SubmitLogin');
        this.errorMessage =  page.getByText('Authentication failed.');
        this.showPassword =  page.getByLabel('Show password');
    }

    async gotoLoginPage(){
        await this.page.goto('http://www.automationpractice.pl/index.php');
        await this.signIn.click();
        await this.page.waitForSelector('#email'); 
    }

    // async gotoHomePage(){

    //     await this.page.goto('http://www.automationpractice.pl/index.php');
    // }

    async loginAction(username, password){

        console.log('Username:', username);
        console.log('Password:', password);

        if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
            throw new Error('Username and password must be strings');
          }

        await this.username.fill(username)
        await this.password.fill(password)
        await this.login.click()
    }
    async showPasswordClick(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
    }

}