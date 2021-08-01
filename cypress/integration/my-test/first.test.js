describe("TODOがちゃんと動くかのテスト", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${process.env.PORT || "3000"} `)
  })
  it("TODO List in Reduxがある", () => {
    cy.contains("TODO List in Redux")
  })

  it("Redux の方でTODOを追加できる", () => {
    cy.contains("TODO List in Redux")
    cy.get("input").type("Recoilのほうのてすと の方でTODOを追加できる")
    cy.contains("add").click()
    cy.contains("Recoilのほうのてすと の方でTODOを追加できる")
  })

  it("Recoilのほうのてすと の方でTODOを追加できる", () => {
    cy.contains("recoilTODO")
    cy.contains("recoilTODO").click()
    cy.get("input").type("Recoilのほうのてすと の方でTODOを追加できる")
    cy.contains("add").click()
    cy.contains("Recoilのほうのてすと の方でTODOを追加できる")
  })
})
