import axios from "axios";

describe("Bookish application", function () {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven desing", id: 2 },
      { name: "Builing Microservices", id: 3 },
    ];
    return Promise.all(
      books.map((item) =>
        axios
          .post("http://localhost:8080/books", item, {
            headers: { "Conent-Type": "application/json" },
          })
          .catch((err) => err)
      )
    );
  });

  it("Visits the bookish", function () {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map((q) => q.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven desing",
        "Builing Microservices",
      ]);
    });
  });
});
