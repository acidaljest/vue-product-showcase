export default {
  namespaced: true,
  state: {
    categoriaActiva: "todas",
  },
  mutations: {
    SET_CATEGORIA(state, categoria) {
      state.categoriaActiva = categoria;
    },
  },
  actions: {
    cambiarCategoria({ commit }, categoria) {
      commit("SET_CATEGORIA", categoria);
    },
  },
  getters: {
    categoriaActiva: (state) => state.categoriaActiva,
  },
};