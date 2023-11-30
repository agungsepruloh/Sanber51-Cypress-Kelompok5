// Import necessary commands and assertions
/// <reference types="cypress" />
const CartPage = require("../../pages/cart");
const HomePage = require("../../pages/home");
const ProductPage = require("../../pages/product");


describe('View and Update Shopping Cart', () => {
  beforeEach(() => {
    //login
    cy.login('uwu@example.com','Qwerty_123')
    // Access the what's new page
    ProductPage.visitWhatsNew();

    // Select the first product item
    ProductPage.productItems.get(".product-item-link").eq(0).click();
    
    // Select the size
    ProductPage.getAttributeCode("size").click();
    ProductPage.getAttributeCode("size")
      .find(".swatch-option")
      .eq(0)
      .then(($size) => {
        const size = $size.attr("option-label");
        cy.wrap(size).as("size");
      });
    ProductPage.getAttributeCode("size").find(".swatch-option").eq(0).click();
    cy.get("@size").then((size) => {
      ProductPage.getAttributeCode("size")
        .find(".swatch-attribute-selected-option")
        .should("contain.text", size);
    });

    // Select the color
    ProductPage.getAttributeCode("color").click();
    ProductPage.getAttributeCode("color")
      .find(".swatch-option")
      .eq(0)
      .then(($color) => {
        const color = $color.attr("option-label");
        cy.wrap(color).as("color");
      });
    ProductPage.getAttributeCode("color").find(".swatch-option").eq(0).click();
    cy.get("@color").then((color) => {
      ProductPage.getAttributeCode("color")
        .find(".swatch-attribute-selected-option")
        .should("contain.text", color);
    });

    // Fill the quantity field and add the product to the cart
    ProductPage.quantity.clear();
    ProductPage.quantity.type("3");
    ProductPage.addToCartButton.click();

    // Assert that the success message is displayed
    cy.get(".message-success").should("be.visible");
    
    // Visit cart
    CartPage.visitCart();

  });

  it("Should add the product to the cart after selecting a size, color and quantity", () => {
    
    });
});