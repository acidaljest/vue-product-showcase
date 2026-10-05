<!-- Header.vue -->
<template>
  <v-app-bar color="secondary" class="app-header">
    <v-toolbar-title class="app-header__title">Vue Product Showcase</v-toolbar-title>
    <v-spacer />
    <v-btn variant="text" :aria-label="etiquetaTema" @click="alternarTema">
      {{ etiquetaTema }}
    </v-btn>
  </v-app-bar>
</template>

<script>
import { computed } from "vue";
import { useTheme } from "vuetify";

export default {
  name: "AppHeader",
  setup() {
    const theme = useTheme();
    const etiquetaTema = computed(() =>
      theme.global.current.value.dark ? "Usar tema claro" : "Usar tema oscuro",
    );

    function alternarTema() {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
    }

    return { etiquetaTema, alternarTema };
  },
};
</script>