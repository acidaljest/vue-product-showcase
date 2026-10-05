export default {
  namespaced: true,
  state: {
    lista: [],
  },
  mutations: {
    TOGGLE_FAVORITO(state, producto) {
      const yaEsFavorito = state.lista.some((favorito) => favorito.id === producto.id);
      state.lista = yaEsFavorito
        ? state.lista.filter((favorito) => favorito.id !== producto.id)
        : [...state.lista, producto];
    },
  },
  actions: {
    alternarFavorito({ commit }, producto) {
      commit("TOGGLE_FAVORITO", producto);
    },
  },
  getters: {
    favoritos: (state) => state.lista,
    esFavorito: (state) => (id) => state.lista.some((producto) => producto.id === id),
  },
};