import { loginData } from "../fixtures/loginData";

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://web-dev.growth-x.com/')
    cy.get('.ant-input[placeholder="Email*"]')
      .type(loginData.email)
    cy.get('.ant-input[placeholder="Password*"]')
      .type(loginData.password, { sensitive: true })
    cy.get('.ant-btn-primary')
      .contains('Login').click()
})

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
      return originalFn(element, text, options)
  })
