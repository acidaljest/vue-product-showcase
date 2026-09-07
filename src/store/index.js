import { createStore } from "vuex";
import productos from "./modules/productos";
import filtros from "./modules/filtros";

export default createStore({
  modules: {
    productos,
    filtros,
  },
});