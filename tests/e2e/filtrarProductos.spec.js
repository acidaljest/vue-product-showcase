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

    cy.get(".product-card").first().contains("Agregar a favoritos").click();
    cy.get(".product-card").first().contains("Quitar de favoritos").should("be.visible");

    cy.contains("button", "Usar tema oscuro").click();
    cy.get(".v-application").should("have.class", "v-theme--dark");
    cy.contains("button", "Usar tema claro").click();
  });
});