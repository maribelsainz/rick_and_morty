import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marca: 'Rick and Morty',
    listaPersonajes: []
  },
  getters: {
    getMarca(state) {
      return state.marca;
    },
    envioPersonajes(state) {
      return state.listaPersonajes;
    },
  },
  mutations: {
    // Aquí se muta la variable listaPersonajes(arreglo) creada en el state con los nuevos datos recibidos de la API
    mutandoInfoAPI(state, infoPersonajeRecibido) {
      state.listaPersonajes = infoPersonajeRecibido;
    },
  },
  actions: {
    // Aquí se envía a VUEX mediante acciones la info recibida de la API
    recibidoInfoAPI(context, infoAPI) {
      context.commit('mutandoInfoAPI', infoAPI);
    },
  }
})