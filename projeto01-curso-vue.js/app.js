new Vue({
    el: '#projeto01',
    data: {
        porcentagemJogador: 100,
        porcentagemMonstro: 100,
        ataqueMonstro: 0,
        ataqueJogador: 0,
        listaAtaques: [],
        iniciarClicado: true,
        vitorioso: null     
    },
    methods: {
        botaoIniciar() {
            this.vitorioso = null
            this.iniciarClicado = !this.iniciarClicado
        },
        funcaoAtaque() {
            if(this.porcentagemMonstro !== 0 && this.porcentagemJogador !== 0){
                this.ataqueMonstro = Math.floor(Math.random() * 10 + 10)
                this.ataqueJogador = this.ataqueMonstro - Math.floor(Math.random() * 10 + 1)    

                this.porcentagemJogador -= this.ataqueMonstro
                this.porcentagemMonstro -= this.ataqueJogador 

                this.listaAtaques.push(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.push(`Jogador atingiu monstro com ${this.ataqueJogador}.`) 
            }

            if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
            } if(this.porcentagemJogador === 0){
                this.vitorioso = false
            }
        },
        funcaoAtaqueEspecial() {
            if(this.porcentagemMonstro !== 0 && this.porcentagemJogador !== 0){
                this.ataqueJogador = Math.floor(Math.random() * 10 + 10)
                this.ataqueMonstro = this.ataqueJogador - Math.floor(Math.random() * 10 + 1)    

                this.porcentagemJogador -= this.ataqueMonstro
                this.porcentagemMonstro -= this.ataqueJogador 

                this.listaAtaques.push(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.push(`Jogador atingiu monstro com ${this.ataqueJogador}.`)
            }

            if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
            } if(this.porcentagemMonstro === 0){
                this.vitorioso = true
            } 

        },
        funcaoCurar() {
            this.ataqueMonstro = Math.floor(Math.random() * 10)
            this.ataqueJogador = this.ataqueMonstro - Math.floor(Math.random() * 5)
            this.porcentagemJogador -= this.ataqueMonstro
            this.porcentagemMonstro -= this.ataqueJogador
        }
    }
})