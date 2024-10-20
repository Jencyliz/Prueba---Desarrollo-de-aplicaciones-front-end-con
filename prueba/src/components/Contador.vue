<!-- Contador.vue -->
<template>
    <div>
      <h2>Contador: {{ contador }}</h2>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getContador']),
      contador() {
        return this.getContador;
      },
    },
    methods: {
      ...mapActions(['incrementar', 'decrementar']),
    },
  };
  </script>
  