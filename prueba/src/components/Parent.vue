<template>
    <div>
      <h2>Componente Padre</h2>
      <Child @text-enviado="manejarTextoRecibido" />
      <p>Texto recibido: {{ textoRecibido }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: {
      Child,
    },
    data() {
      return {
        textoRecibido: '',
      };
    },
    methods: {
      manejarTextoRecibido(texto) {
        this.textoRecibido = texto;
      },
    },
  };
  </script>
  