class HomePage {
  get loginButton() {
    return cy.get("a").contains("Sign In");
  }
}

module.exports = new HomePage();
