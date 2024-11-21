class LoginPage {
    emailEntryField = '.ant-input[placeholder="Email*"]'
    passwordEntryField = '.ant-input[placeholder="Password*"]'
    logInButton = '.ant-btn.ant-btn-block.ant-btn-primary'
    signUpButon = 'div:nth-of-type(1) > a'
    forgotPasswordButton = 'div:nth-of-type(2) >a'
    logoImg = 'img[alt="logo"]'

    getEmailEntryField () {
        return cy.get(this.emailEntryField) 
    }

    getPasswordEntryField () {
        return cy.get(this.passwordEntryField) 
    }

    getLogInButton () {
        return cy.get(this.logInButton) 
    }

    getSignUpButon () {
        return cy.get(this.signUpButon) 
    }

    getForgotPasswordButton () {
        return cy.get(this.forgotPasswordButton) 
    }

    getLogoImg () {
        return cy.get(this.logoImg)
    }

}
const loginPage = new LoginPage()
export default loginPage;