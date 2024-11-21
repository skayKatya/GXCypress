import loginPage from "../support/pages/loginPage";
import loginPageSteps from "../support/steps/LoginPageSteps";

describe ('Login into the app', ()=> {
    beforeEach(() => {
        cy.visit('https://web-dev.growth-x.com/') 
      });


    it ('Growth-X logo is visible', ()=> {
       //loginPage.getLogoImg().should('be.visible')
       cy.get('img[alt="logo"]').should('be.visible')
    })

    it ('Entry field for email on Login page should be visible', ()=> {
        loginPage.getEmailEntryField().should('be.visible')
        loginPage.getEmailEntryField().focus()
        loginPage.getEmailEntryField().should('have.css', 'border-color', 'rgb(74, 177, 255)')
    })

    it ('Entry field for password on Login page should be visible', ()=> {
        loginPage.getPasswordEntryField().should('be.visible')
        loginPage.getPasswordEntryField().focus()
        loginPage.getPasswordEntryField().should('have.css', 'border-color', 'rgb(74, 177, 255)')
    })

    it ('The button for forgot password on Login page should be visible', ()=> {
        loginPage.getForgotPasswordButton().should('be.visible')
    })

    it ('The button for sign up on Login page should be visible', ()=> {
        loginPage.getLogInButton().should('be.visible')
    })

    it ('The button for log in on Login page should be visible', ()=> {
        loginPage.getLogInButton().should('be.visible')
        loginPage.getLogInButton().should('not.be.disabled')
    })

    it('Verify error on empty email field', ()=> {
        loginPage.getPasswordEntryField().type('123')
        loginPage.getLogInButton().click()
        cy.get('div:nth-of-type(1) > .ant-col.ant-form-item-control-wrapper > .ant-form-item-control.has-error.has-feedback > .ant-form-explain')
            .should('have.text', 'Required')
        loginPage.getEmailEntryField().should('have.css', 'border-color', 'rgb(245, 34, 45)')   
    })

    it('Verify error on empty password field', ()=> {
        loginPage.getEmailEntryField().type('test@ukr.net')
        loginPage.getLogInButton().click()
        cy.get('div:nth-of-type(2) > .ant-col.ant-form-item-control-wrapper > .ant-form-item-control.has-error.has-feedback > .ant-form-explain')
            .should('have.text', 'Required')
        loginPage.getPasswordEntryField().should('have.css', 'border-color', 'rgb(245, 34, 45)')   
    })

    it('Verify error on empty email and password field', ()=> {
        loginPage.getLogInButton().click()
        cy.get('div:nth-of-type(1) > .ant-col.ant-form-item-control-wrapper > .ant-form-item-control.has-error.has-feedback > .ant-form-explain')
            .should('have.text', 'Required')
        cy.get('div:nth-of-type(2) > .ant-col.ant-form-item-control-wrapper > .ant-form-item-control.has-error.has-feedback > .ant-form-explain')
            .should('have.text', 'Required')
            loginPage.getPasswordEntryField().should('have.css', 'border-color', 'rgb(245, 34, 45)')
            loginPage.getEmailEntryField().should('have.css', 'border-color', 'rgb(245, 34, 45)')      
    })

    it('Verify Invalid email format field', ()=> {
        loginPage.getEmailEntryField().type('test')
        loginPage.getPasswordEntryField().type('123')
        loginPage.getLogInButton().click()
        cy.get('div:nth-of-type(1) > .ant-col.ant-form-item-control-wrapper > .ant-form-item-control.has-error.has-feedback > .ant-form-explain')
            .should('have.text', 'Invalid email format')
        loginPage.getEmailEntryField()
            .should('have.css', 'border-color', 'rgb(245, 34, 45)')   
    })

    it('Verify error about wrong email', ()=> {
        loginPage.getEmailEntryField().type('test@dot.com')
        loginPage.getPasswordEntryField().type('123')
        loginPage.getLogInButton().click()
        cy.get('.ant-alert-message')
            .should('have.text', 'Log in failed')
        cy.get('.ant-alert-description')
            .should('have.text', 'Wrong email or password. Please try again.')
        cy.get('.ant-alert-no-icon')
            .should('have.css', 'background-color', 'rgb(255, 241, 240)')
            .should('have.css', 'border-color', 'rgb(255, 163, 158)')  
    })




})


