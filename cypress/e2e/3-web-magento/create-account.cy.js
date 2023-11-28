import PageCreateAccount from "../../support/PageCreateAccount"
const Dataregis=require('../../fixtures/Register.json')

describe('verivy create account functionality', () => {
  it('valid create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type("Nadiya")
    cy.get('#lastname').type("Rahayu")
    cy.get('#email_address').type("nadiyarahayu035@gmail.com")
    cy.get('#password').type("Magento12!")
    cy.get('#password-confirmation').type("Magento12!")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  it('valid create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get(PageCreateAccount.ofirstname).type("Nadiya")
    cy.get(PageCreateAccount.olastname).type("Rahayu")
    cy.get(PageCreateAccount.oemail_address).type("nadiyarahayu035@gmail.com")
    cy.get(PageCreateAccount.opassword).type("Magento12!")
    cy.get(PageCreateAccount.opasswordconfirmation).type("Magento12!")
    cy.get(PageCreateAccount.obuttonregister).click()
  })

  it.only('invalid email create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get(PageCreateAccount.ofirstname).type("Nadiya")
    cy.get(PageCreateAccount.olastname).type("Rahayu")
    cy.get(PageCreateAccount.oemail_address).type(Dataregis.invalidRegis.demail)
    cy.get(PageCreateAccount.opassword).type("Magento12!")
    cy.get(PageCreateAccount.opasswordconfirmation).type("Magento12!")
    cy.get(PageCreateAccount.obuttonregister).click()
})
})