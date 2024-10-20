<template>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">Mi Aplicación</router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="!user"><router-link to="/login">Login</router-link></li>
          <li v-if="user">
            <button @click="logout">Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </nav>
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
  .navbar {
    background-color: #2c3e50;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  
  .nav-links button {
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
  }
  
  .nav-links button:hover {
    text-decoration: underline;
  }
  </style>
  