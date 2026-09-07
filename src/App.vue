<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <ProductList />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter, ProductList },
};
</script>