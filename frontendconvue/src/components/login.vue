<template>
    <div>
      <h2>Iniciar sesión</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login">Iniciar sesión</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const error = ref(null);
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          error.value = null;
        } catch (err) {
          error.value = 'Error al iniciar sesión';
        }
      };
  
      return {
        email,
        password,
        error,
        login
      };
    }
  };
  </script>
  