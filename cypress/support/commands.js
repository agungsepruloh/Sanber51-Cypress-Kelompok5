// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const LoginPage = require("../pages/login");

Cypress.Commands.add("accessHome", () => {
  cy.visit("https://magento.softwaretestingboard.com");
});

Cypress.Commands.add(
  "login",
  (email = "admin@example.com", password = "password") => {
    LoginPage.visit();
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.submit();
  }
);
