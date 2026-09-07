<template>
  <v-card class="product-card" elevation="2">
    <v-img :src="producto.image" height="160" contain class="pa-4" />
    <v-card-title class="text-body-1">{{ producto.title }}</v-card-title>
    <v-card-subtitle>${{ producto.price }}</v-card-subtitle>
    <v-card-text>
      <v-chip size="small" color="primary" variant="tonal">
        {{ producto.category }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" variant="flat" block @click="$emit('ver-detalle', producto)">
        Ver detalle
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    producto: {
      type: Object,
      required: true,
      validator: (p) => "title" in p && "price" in p,
    },
  },
  emits: ["ver-detalle"],
  mounted() {
    // Hook del ciclo de vida requerido en la Lección 1
    console.log(`[ProductCard montada] ${this.producto.title}`);
  },
};
</script>

<style scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
