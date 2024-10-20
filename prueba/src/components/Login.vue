<template>
  <div>
    <h2>Iniciar sesión</h2>
    <input v-model="email" placeholder="Correo electrónico" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert('Inicio de sesión exitoso');
        this.$router.push('/home');
      } catch (error) {
        alert('Error al iniciar sesión: ' + error.message);
      }
    },
  },
};
</script>
