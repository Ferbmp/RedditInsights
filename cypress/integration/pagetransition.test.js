describe("Check pagination", () => {
  it("should go to hot page", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/new");

    cy.get("a").contains("Hot").click();
    cy.url().should("include", "/hot");
  });

  it("should go to rising page", () => {
    cy.url().should("include", "/hot");

    cy.get("a").contains("Rising").click();
    cy.url().should("include", "/rising");
  });

  it("should go to new page", () => {
    cy.url().should("include", "/rising");

    cy.get("a").contains("New").click();
    cy.url().should("include", "/new");
  });
});
