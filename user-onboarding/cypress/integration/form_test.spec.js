describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const firstNameInput = () => cy.get("input[name=firstName]");
  const lastNameInput = () => cy.get("input[name=lastName]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsOfService = () => cy.get("[type=checkbox]");
  const submitButton = () => cy.get("button[id=submitButton]");

  it("Sanity check to make sure tests are working", () => {
    expect(2 + 2).to.equal(4);
    expect(50 + 50).to.equal(100);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  it("the proper elements are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsOfService().should("exist");
    submitButton().should("exist");
  });
});
