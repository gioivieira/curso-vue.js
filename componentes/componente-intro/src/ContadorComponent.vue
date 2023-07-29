<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
        <div>teste</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            adicionar() {
                this.contador++
            },
            subtrair() {
                this.contador--
            }
        }
    }
</script>

<style scoped>

    div {
        border: 1px solid blue;
    }

    span{
        border-bottom: 1px solid black;
        height: 30px;
        padding: 5px 25px;
    }

    button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: white;
        margin-left: 10px;
        outline: none;
    }
</style>