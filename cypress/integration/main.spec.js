/// <reference types="Cypress" />

describe("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Health check", () => {
    cy.percySnapshot();
  });

  it("Generates The specified amount of text", () => {
    // Check the toggle works
    cy.get("[data-testid=typeToggle]")
      .should("have.text", "Multibyte")
      .click()
      .should("have.text", "Plain")
      .click();

    cy.get("[data-testid=lineCount]")
      .should("have.value", "20")
      .clear()
      .type(10)
      .should("have.value", "10");

    cy.get("[data-testid=output]").should("be.empty");

    cy.get("[data-testid=floater").should("exist");

    cy.get("[data-testid=generateButton]").click();

    cy.get("[data-testid=floater").should("not.exist");

    cy.get("[data-testid=output]")
      .should("be.not.empty")
      .then(output => {
        const countOfPeriods = output.text().match(/\./g).length;
        expect(countOfPeriods).to.be.equal(10);
      });
  });
});
