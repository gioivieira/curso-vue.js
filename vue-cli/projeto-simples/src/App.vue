<template>
  <div id="app">{{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        titulo: 'Usando Vue.js!'
      }
    }
  }
</script>

<style>
  #app {
    background-color: brown;
    color: white;
  }
</style>