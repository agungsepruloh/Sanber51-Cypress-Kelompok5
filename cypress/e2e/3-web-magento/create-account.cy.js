import PageCreateAccount from "../../support/PageCreateAccount"
const Dataregis=require('../../fixtures/Register.json')

describe('verivy create account functionality', () => {
  it('valid create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.get('.panel > .header > :nth-child(3) > a').click()
    //cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"').click()
    cy.get('#firstname').type("Nadiya")
    cy.get('#lastname').type("Rahayu")
    cy.get('#email_address').type("nadiyaraha1@gmail.com")
    cy.get('#password').type("Magento12!")
    cy.get('#password-confirmation').type("Magento12!")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  it('valid create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.contains('Create an Account').click({force:true});
    //cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get(PageCreateAccount.ofirstname).type("Nadiya")
    cy.get(PageCreateAccount.olastname).type("Rahayu")
    cy.get(PageCreateAccount.oemail_address).type("nadiya123@gmail.com")
    cy.get(PageCreateAccount.opassword).type("Magento12!")
    cy.get(PageCreateAccount.opasswordconfirmation).type("Magento12!")
    cy.get(PageCreateAccount.obuttonregister).click()
  })

  it('invalid email create account', () => {
    //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    //cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.contains('Create an Account').click({force:true});
    cy.get('#firstname').type("Nadiya")
    cy.get(PageCreateAccount.olastname).type("Rahayu")
    cy.get(PageCreateAccount.oemail_address).type(Dataregis.invalidRegis.demail)
    cy.get(PageCreateAccount.opassword).type("Magento12!")
    cy.get(PageCreateAccount.opasswordconfirmation).type("Magento12!")
    cy.get(PageCreateAccount.obuttonregister).click()
    cy.get('#email_address-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
})
  it('invalid password confirmation create account', () => {
   //cy.visit('https://magento.softwaretestingboard.com/')
    cy.accessHome()
    cy.contains('Create an Account').click({force:true});
    //cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get(PageCreateAccount.ofirstname).type("Nadiyar")
    cy.get(PageCreateAccount.olastname).type("Rahayu")
    cy.get(PageCreateAccount.oemail_address).type(Dataregis.validRegister.demail)
    cy.get(PageCreateAccount.opassword).type(Dataregis.validRegister.dpassword)
    cy.get(PageCreateAccount.opasswordconfirmation).type("Magento")
    cy.get(PageCreateAccount.obuttonregister).click()
    cy.get('.confirmation > .control').should('contain', 'Please enter the same value again.')
})

it('invalid password create account', () => {
  //cy.visit('https://magento.softwaretestingboard.com/')
   cy.accessHome()
   cy.contains('Create an Account').click({force:true});
   //cy.get('.panel > .header > :nth-child(3) > a').click()
   cy.get(PageCreateAccount.ofirstname).type("Nadiya")
   cy.get(PageCreateAccount.olastname).type("Rahayu")
   cy.get(PageCreateAccount.oemail_address).type(Dataregis.validRegister.demail)
   cy.get(PageCreateAccount.opassword).type(Dataregis.invalidRegis.dpassword)
   cy.get(PageCreateAccount.opasswordconfirmation).type(Dataregis.invalidRegis.dconfirmationpassword)
   cy.get(PageCreateAccount.obuttonregister).click()
   cy.get('#password-error').should('contain','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
})

it('empty first name', () => {
  //cy.visit('https://magento.softwaretestingboard.com/')
   cy.accessHome()
   cy.contains('Create an Account').click({force:true});
  // cy.get('.panel > .header > :nth-child(3) > a').click()
   cy.get(PageCreateAccount.ofirstname).type("Nad").clear()
   cy.get(PageCreateAccount.olastname).type("Rahayu")
   cy.get(PageCreateAccount.oemail_address).type(Dataregis.validRegister.demail)
   cy.get(PageCreateAccount.opassword).type(Dataregis.validRegister.dpassword)
   cy.get(PageCreateAccount.opasswordconfirmation).type(Dataregis.validRegister.dconfirmationpassword)
   cy.get(PageCreateAccount.obuttonregister).click()
   cy.get('#firstname-error').should('contain', 'This is a required field.')
})

it('empty last name', () => {
  //cy.visit('https://magento.softwaretestingboard.com/')
   cy.accessHome()
   cy.contains('Create an Account').click({force:true});
  // cy.get('.panel > .header > :nth-child(3) > a').click()
   cy.get(PageCreateAccount.ofirstname).type(Dataregis.validRegister.dfirst_name)
   cy.get(PageCreateAccount.olastname).type("Rahayu").clear()
   cy.get(PageCreateAccount.oemail_address).type(Dataregis.validRegister.demail)
   cy.get(PageCreateAccount.opassword).type(Dataregis.validRegister.dpassword)
   cy.get(PageCreateAccount.opasswordconfirmation).type(Dataregis.validRegister.dconfirmationpassword)
   cy.get(PageCreateAccount.obuttonregister).click()
   cy.get('.field-name-lastname > .control').should('contain', 'This is a required field.')
})

it('empty email', () => {
  //cy.visit('https://magento.softwaretestingboard.com/')
   cy.accessHome()
   cy.contains('Create an Account').click({force:true});
  // cy.get('.panel > .header > :nth-child(3) > a').click()
   cy.get(PageCreateAccount.ofirstname).type(Dataregis.validRegister.dfirst_name)
   cy.get(PageCreateAccount.olastname).type(Dataregis.validRegister.dlast_name)
   cy.get(PageCreateAccount.oemail_address).type('nadi@gmail.com').clear()
   cy.get(PageCreateAccount.opassword).type(Dataregis.validRegister.dpassword)
   cy.get(PageCreateAccount.opasswordconfirmation).type(Dataregis.validRegister.dconfirmationpassword)
   cy.get(PageCreateAccount.obuttonregister).click()
   cy.get('#email_address-error').should('contain', 'This is a required field.')
})

})