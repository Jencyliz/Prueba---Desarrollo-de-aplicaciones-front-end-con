import { createStore } from 'vuex';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const store = createStore({
  state: {
    usuario: null
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    }
  },
  actions: {
    observarUsuario({ commit }) {
      onAuthStateChanged(auth, (usuario) => {
        commit('setUsuario', usuario ? usuario : null);
      });
    }
  },
  getters: {
    usuarioAutenticado: (state) => !!state.usuario
  }
});

export default store;
