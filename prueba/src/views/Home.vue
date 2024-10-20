<template>
    <div class="home">
      <h1>Bienvenido a la aplicación</h1>
      <p>Esta es la página principal. ¡Explora y disfruta de nuestros servicios!</p>
      <div v-if="user">
        <p>Usuario autenticado: {{ user.email }}</p>
        <button @click="logout">Cerrar sesión</button>
      </div>
      <div v-else>
        <p>No has iniciado sesión.</p>
        <router-link to="/login">Iniciar sesión</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  
  export default {
    data() {
      return {
        user: null,
      };
    },
    created() {
      // Verifica si el usuario está autenticado
      onAuthStateChanged(auth, (currentUser) => {
        this.user = currentUser;
      });
    },
    methods: {
      async logout() {
        try {
          await signOut(auth);
          this.user = null;
          alert('Has cerrado sesión');
          this.$router.push('/login');
        } catch (error) {
          alert('Error al cerrar sesión: ' + error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  