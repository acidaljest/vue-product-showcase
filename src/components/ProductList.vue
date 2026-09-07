<template>
  <div class="product-list">
    <!-- Filtro por categoría -->
    <v-select
      :model-value="categoriaActiva"
      :items="categorias"
      label="Filtrar por categoría"
      class="mb-4"
      @update:model-value="cambiarCategoria"
    />

    <!-- Estado de carga -->
    <v-progress-circular v-if="cargando" indeterminate color="primary" />

    <!-- Estado de error -->
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>

    <!-- Estado vacío -->
    <v-alert v-else-if="productosFiltrados.length === 0" type="info">
      No hay productos disponibles en esta categoría.
    </v-alert>

    <!-- Lista de productos -->
    <v-row v-else>
      <v-col
        v-for="producto in productosFiltrados"
        :key="producto.id"
        cols="12" sm="6" md="4"
      >
        <ProductCard :producto="producto" @ver-detalle="mostrarDetalle" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  computed: {
    ...mapGetters("productos", ["productos", "cargando", "error"]),
    ...mapGetters("filtros", ["categoriaActiva"]),
    categorias() {
      const cats = this.productos.map((p) => p.category);
      return ["todas", ...new Set(cats)];
    },
    // Getter computado local: deriva la lista filtrada del estado global
    productosFiltrados() {
      if (this.categoriaActiva === "todas") return this.productos;
      return this.productos.filter((p) => p.category === this.categoriaActiva);
    },
  },
  methods: {
    ...mapActions("productos", ["fetchProductos"]),
    ...mapActions("filtros", ["cambiarCategoria"]),
    mostrarDetalle(producto) {
      alert(`${producto.title}\n\n${producto.description}`);
    },
  },
  // Llamada a la API apenas el componente se monta
  mounted() {
    this.fetchProductos();
  },
};
</script>