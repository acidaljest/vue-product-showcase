describe("Filtrado de productos", () => {
  it("el usuario filtra productos por categoría y ve resultados actualizados", () => {
    cy.visit("/");

    // Espera a que carguen los productos iniciales
    cy.get(".product-card", { timeout: 10000 }).should("have.length.greaterThan", 0);

    // Selecciona una categoría en el filtro
    cy.get(".v-select").click();
    cy.contains(".v-list-item", "electronics").click();

    // Verifica que la lista se actualizó
    cy.get(".product-card").each(($card) => {
      cy.wrap($card).should("contain.text", "electronics");
    });
  });
});