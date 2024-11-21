class SignUpPage {
    firstNameEntryField = '.ant-input[placeholder="First Name*"]'
    emailEntryField = '.ant-input[placeholder="Email*"]'
    passwordEntryField = '.ant-input[placeholder="Password*"]'
    questionDropdown = '.ant-select-selection__placeholder'
    signUpButton = 'ant-btn ant-btn-primary ant-btn-block'
    termsOfUseButton = '.register-form_licence > a:nth-of-type(1)'
    privacyPolicyButton = '.register-form_licence > a:nth-of-type(2)'
    logInButton = 'div:nth-of-type(3) >a'
    logoImg = 'img[alt="logo"]'

    getFirstNameEntryField () {
        return cy.get(this.firstNameEntryField)
    }

    getEmailEntryField () {
        return cy.get(this.emailEntryField)
    }

    getPasswordEntryField () {
        return cy.get(this.passwordEntryField)
    }

    getQuestionDropdown () {
        return cy.get(this.questionDropdown)
    }

    getSignUpButton () {
        return cy.get(this.signUpButton)
    }

    getTermsOfUseButton () {
        return cy.get(this.termsOfUseButton)
    }

    getPrivacyPolicyButton () {
        return cy.get(this.privacyPolicyButton)
    }

    getLogInButton () {
        return cy.get(this.logInButton)
    }

    getLogoImg () {
        return cy.get(this.logoImg)
    }
}

const sighUpPage = new SighUpPage()
export default sighUpPage;