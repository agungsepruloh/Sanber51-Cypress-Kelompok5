class CartPage {
    visitCart() {
      cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
    }
  
    
}
  module.exports = new CartPage();
  