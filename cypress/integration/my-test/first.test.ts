describe("TODOがちゃんと動くかのテスト", () => {
  it("Shows Google", () => {
    cy.visit(`http://localhost:${process.env.PORT || "3000"} `)

    cy.title().should("include", "TODO")
  })
})
