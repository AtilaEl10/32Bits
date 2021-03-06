import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0003",
        nombre: "Gear of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true
      },
    ],
    filtroCodigo: "",
  },
  getters: {
    cantidadJuegos(state) {
      const juegos = state.juegos
      if(!juegos) return 0;
      const cantidad = juegos.length
      return cantidad
    },
    juegosStock(state) {
      const stock = state.juegos
      if(!stock) return
      const stockfilt = stock.filter(fil => fil.stock > 0)
      if (!stockfilt) return 0 

      return stockfilt.length
    }
  },
  mutations: {
    añadirPalabra(state, payload) {
      state.filtroCodigo = payload
    },
    quitarStock(state,payload) {
      state.juegos.stock = payload--
    }
  },
  actions: {},
});
