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
        voceGanhou() {
            if(this.vitorioso && this.porcentagemJogador !== 0 && this.porcentagemMonstro !== 0) {
                return true
            } if(this.vitorioso && this.porcentagemJogador !== 0 && this.porcentagemMonstro === 0){
                return true
            } if(this.vitorioso && this.porcentagemJogador === 0 && this.porcentagemMonstro !== 0){
                return true
            }
        },
        vocePerdeu() {
            if(this.vitorioso === false && this.porcentagemJogador !== 0 && this.porcentagemMonstro !== 0) {
                return true
            } if(this.vitorioso === false && this.porcentagemJogador !== 0 && this.porcentagemMonstro === 0){
                return true
            } if(this.vitorioso === false && this.porcentagemJogador === 0 && this.porcentagemMonstro !== 0){
                return true
            }
        },
        botaoIniciar() {
            this.iniciarClicado = !this.iniciarClicado
            this.vitorioso = null
            this.listaAtaques = []
            this.porcentagemJogador = 100
            this.porcentagemMonstro = 100
        },
        botaoDesistir() {
            this.iniciarClicado = !this.iniciarClicado
            this.porcentagemJogador = 100 
            this.porcentagemMonstro = 100 
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
            }if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
            }if(this.porcentagemJogador === 0){
                this.vitorioso = false
            } if(this.porcentagemMonstro === 0){
                this.vitorioso = true
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
            }if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
            }if(this.porcentagemMonstro === 0){
                this.vitorioso = true
            } if(this.porcentagemJogador === 0){
                this.vitorioso = false
            } 

        },
        funcaoCurar() {
            if(this.porcentagemMonstro !== 0 && this.porcentagemJogador !== 0){
                this.ataqueMonstro = Math.floor(Math.random() * 10 + 10)
                this.defesaJogador = Math.floor(Math.random() * 10 + 10)    

                if(this.porcentagemJogador !== 100 && this.porcentagemJogador < 100){
                this.porcentagemJogador = (this.porcentagemJogador + this.defesaJogador) - this.ataqueMonstro
    
                this.listaAtaques.push(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.push(`Jogador ganhou força de ${this.ataqueJogador}.`)
                }
            }

            if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
            }if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
            }if(this.porcentagemJogador === 0){
                this.vitorioso = false
            } if(this.porcentagemMonstro === 0){
                this.vitorioso = true
            }
        }
    }
})