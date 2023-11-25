// Import necessary commands and assertions
/// <reference types="cypress" />
const HomePage = require("../../pages/home");
const ProductPage = require("../../pages/product");

describe("Accessing the product page", () => {
  beforeEach(() => {
    // Access the home page
    HomePage.visit();

    // Select the first item from the menu
    HomePage.uiMenuItems.eq(0).click();
  });

  it("Product items should be visible", () => {
    // Assert that the product items are visible
    ProductPage.productItems.should("be.visible");
  });

  it("Should display the correct product page", () => {
    // Select the first product item
    ProductPage.productItems
      .get(".product-item-link")
      .eq(0)
      .then(($productItem) => {
        const productName = $productItem.text().trim();
        cy.wrap(productName).as("productName");
      });
    ProductPage.productItems.get(".product-item-link").eq(0).click();

    // Assert that the product page is correct
    cy.get("@productName").then((productName) => {
      cy.title().should("include", productName);
    });
  });
});
