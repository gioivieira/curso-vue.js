new Vue({
    el: '#projeto01',
    data: {
        porcentagemJogador: 100,
        porcentagemMonstro: 100,
        ataqueMonstro: 0,
        ataqueJogador: 0,
        listaAtaques: [],
        iniciarClicado: true,
        vitorioso: undefined,
        widthJogador: 100,
        widthMonstro: 100,
        backgroundJogador: 'green',
        backgroundMonstro: 'green'      
    },
    computed: {
        jogadorPorcentagem() {
            return {
                height: '3vh',
                backgroundColor: this.backgroundJogador,
                width: `${this.widthJogador}%`
            }
        },
        monstroPorcentagem() {
            return {
                height: '3vh',
                backgroundColor: this.backgroundMonstro,
                width: `${this.widthMonstro}%`
            }
        }
    },
    methods: {
        lista(i) {
            if(i % 2 !== 0){
                return {
                    backgroundColor: 'lightBlue',
                    width: '100%',
                    height: '3vh'
                }
            } else {
                return {
                    backgroundColor: 'orange',
                    width: '100%',
                    height: '3vh'
                }
            }
        },
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
            this.iniciarClicado = false
            this.vitorioso = null
            this.listaAtaques = []
            this.porcentagemJogador = 100
            this.porcentagemMonstro = 100
            this.widthJogador = 100
            this.widthMonstro = 100
            this.backgroundJogador = 'green' 
            this.backgroundMonstro = 'green'
        },
        botaoDesistir() {
            this.iniciarClicado = !this.iniciarClicado
            this.porcentagemJogador = 100 
            this.porcentagemMonstro = 100
            this.widthJogador = 100
            this.widthMonstro = 100
            this.backgroundJogador = 'green' 
            this.backgroundMonstro = 'green'
        },
        funcaoAtaque() {
            if(this.porcentagemMonstro !== 0 && this.porcentagemJogador !== 0){
                this.ataqueMonstro = Math.floor(Math.random() * 10 + 10)
                this.ataqueJogador = this.ataqueMonstro - Math.floor(Math.random() * 10 + 1)

                this.widthJogador -= this.ataqueMonstro
                this.widthMonstro -= this.ataqueJogador 

                this.porcentagemJogador -= this.ataqueMonstro
                this.porcentagemMonstro -= this.ataqueJogador 

                this.listaAtaques.unshift(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.unshift(`Jogador atingiu monstro com ${this.ataqueJogador}.`) 
            }

            if(this.porcentagemJogador < 20){
                this.backgroundJogador = 'red'
            } if(this.porcentagemMonstro < 20){
                this.backgroundMonstro = 'red'
            }

            if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
                this.widthJogador = 0
            }if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
                this.widthMonstro = 0
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
                
                this.widthJogador -= this.ataqueMonstro
                this.widthMonstro -= this.ataqueJogador 

                this.porcentagemJogador -= this.ataqueMonstro
                this.porcentagemMonstro -= this.ataqueJogador 

                this.listaAtaques.unshift(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.unshift(`Jogador atingiu monstro com ${this.ataqueJogador}.`)
            }

            if(this.porcentagemJogador < 20){
                this.backgroundJogador = 'red'
            } if(this.porcentagemMonstro < 20){
                this.backgroundMonstro = 'red'
            }

            if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
                this.widthMonstro = 0
            }if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
                this.widthJogador = 0
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
                this.widthJogador = (this.porcentagemJogador + this.defesaJogador) - this.ataqueMonstro

                if(this.porcentagemJogador >= 100){
                    this.widthJogador = 100
                    this.porcentagemJogador = 100
                }

                this.listaAtaques.unshift(`Monstro atingiu jogador com ${this.ataqueMonstro}.`)
                this.listaAtaques.unshift(`Jogador ganhou força de ${this.ataqueJogador}.`)
                }
            }

            if(this.porcentagemJogador < 20){
                this.backgroundJogador = 'red'
            } if(this.porcentagemJogador >= 20){
                this.backgroundJogador = 'green'
            } 

            if(this.porcentagemMonstro < 0){
                this.porcentagemMonstro = 0
                this.widthMonstro = 0
            }if(this.porcentagemJogador < 0){
                this.porcentagemJogador = 0
                this.widthJogador = 0
            }if(this.porcentagemMonstro === 0){
                this.vitorioso = true
            } if(this.porcentagemJogador === 0){
                this.vitorioso = false
            } 
        }
    }
})