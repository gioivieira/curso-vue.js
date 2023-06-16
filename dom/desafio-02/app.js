new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert("Helloooo!!!")
        },
        escutando(e){
            this.valor = e.target.value
        }
    }
})