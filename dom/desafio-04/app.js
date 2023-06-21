new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		userClass: 'classeCSS2',
		userClass2: 'userClasse2',
		userClass3: 'userClasse3'
	},
	methods: {
		aplicarEfeito() {
			return {
				destaque: this.efeito,
				encolher: !this.efeito
			}
		},
		iniciarEfeito() {
			this.efeito = !this.efeito
		},
		iniciarProgresso() {
		}
	}
})
