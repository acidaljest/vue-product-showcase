import { flushPromises, mount } from "@vue/test-utils";
import { createStore } from "vuex";
import axios from "axios";
import ProductList from "../../src/components/ProductList.vue";
import productos from "../../src/store/modules/productos";
import filtros from "../../src/store/modules/filtros";
import favoritos from "../../src/store/modules/favoritos";

jest.mock("axios");

describe("ProductList", () => {
  it("muestra el error y el catálogo de respaldo si falla la API", async () => {
    axios.get.mockRejectedValue(new Error("API unavailable"));
    const store = createStore({ modules: { productos, filtros, favoritos } });
    const wrapper = mount(ProductList, {
      global: {
        plugins: [store],
        stubs: {
          "v-select": { template: "<div><slot /></div>" },
          "v-progress-circular": { template: "<div><slot /></div>" },
          "v-alert": { template: "<div><slot /></div>" },
          "v-row": { template: "<div><slot /></div>" },
          "v-col": { template: "<div><slot /></div>" },
          ProductCard: {
            props: ["producto"],
            template: '<article class="product-card">{{ producto.title }}</article>',
          },
        },
      },
    });

    await flushPromises();

    expect(wrapper.text()).toContain("No se pudieron cargar los productos");
    expect(wrapper.text()).toContain("Se muestra un catálogo de respaldo.");
    expect(wrapper.findAll(".product-card").length).toBeGreaterThan(0);
  });
});