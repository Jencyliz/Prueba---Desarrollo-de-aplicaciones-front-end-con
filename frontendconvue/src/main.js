import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './firebase';

const app = createApp(App);

store.dispatch('observarUsuario');

app.use(router).use(store).mount('#app');
