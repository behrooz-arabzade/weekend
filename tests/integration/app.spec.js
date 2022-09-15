describe("Loading", () => {
  it("it should load main screen", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // CHeck if Weekend header title is rendered
    cy.get("h1").contains("Weekend");
  });
});
