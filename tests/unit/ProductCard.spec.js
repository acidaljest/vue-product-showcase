import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import favoritos from "../../src/store/modules/favoritos";
import ProductCard from "../../src/components/ProductCard.vue";

describe("ProductCard", () => {
	it("muestra el producto y permite cambiar su estado favorito", async () => {
		const store = createStore({ modules: { favoritos } });
		const wrapper = mount(ProductCard, {
			props: {
				producto: {
					id: 1,
					title: "Auriculares inalámbricos",
					price: 79.99,
					category: "electronics",
					description: "Auriculares Bluetooth.",
					image: "https://example.com/auriculares.jpg",
				},
			},
			global: {
				plugins: [store],
				stubs: {
					"v-card": { template: "<div><slot /></div>" },
					"v-img": { template: "<div><slot /></div>" },
					"v-card-title": { template: "<div><slot /></div>" },
					"v-card-subtitle": { template: "<div><slot /></div>" },
					"v-card-text": { template: "<div><slot /></div>" },
					"v-chip": { template: "<div><slot /></div>" },
					"v-card-actions": { template: "<div><slot /></div>" },
					"v-btn": { template: "<button><slot /></button>" },
				},
			},
		});

		expect(wrapper.text()).toContain("Auriculares inalámbricos");
		expect(wrapper.text()).toContain("electronics");
		expect(wrapper.text()).toContain("79.99");
		expect(wrapper.text()).toContain("Agregar a favoritos");

		await wrapper.findAll("button")[1].trigger("click");

		expect(wrapper.text()).toContain("Quitar de favoritos");
	});
});
