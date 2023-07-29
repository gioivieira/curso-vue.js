<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
// Registro Local
import ContadorComponent from './ContadorComponent.vue';

    export default {
        components: {
            'app-contador': ContadorComponent
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>