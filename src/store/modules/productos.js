import axios from "axios";

export default {
  namespaced: true,
  state: {
    lista: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.lista = productos;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchProductos({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        // Usamos una API pública de prueba (fakestoreapi) que simula un catálogo real
        const respuesta = await axios.get("https://fakestoreapi.com/products");
        commit("SET_PRODUCTOS", respuesta.data);
      } catch (error) {
        commit("SET_ERROR", "No se pudieron cargar los productos. Intenta nuevamente.");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    productos: (state) => state.lista,
    cargando: (state) => state.loading,
    error: (state) => state.error,
  },
};