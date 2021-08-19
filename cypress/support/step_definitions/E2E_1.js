/* global given, then, and */
const variables = {
  // REGISTER
  TestDemo: "http://google.com/",
  LoginButton: "//*[@id='js-header']/div[1]/div/div/div[2]/div/a",
  FalsePassword: "12Ji!"
};

given("I am in the page {string}", page => {
  page = variables[page];
  cy.visit(page);
  cy.wait(2000);
});

then("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

when("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

and("I click {string}", clickEvent => {
  clickEvent = variables[clickEvent];
  cy.xpath(clickEvent).click({ force: true });
  cy.wait(1000);
});

Cypress.on(
  "uncaught:exception",
  (err, runnable) =>
    // returning false here prevents Cypress from
    // failing the test
    false
);
