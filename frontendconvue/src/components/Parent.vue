<template>
    <div>
      <Child @textoEnviado="mostrarTexto" />
      <p>Texto recibido: {{ texto }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        texto: ''
      };
    },
    methods: {
      mostrarTexto(nuevoTexto) {
        this.texto = nuevoTexto;
      }
    }
  };
  </script>
  