new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeCSS1: true,
		userClass: '',
		userClass2: '',
		cor5: '',
		edicoes: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			let temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor === 100) clearInterval(temporizador)
			}, 500)
		},
		setClasse(e) {
			if(e.target.value === 'true'){
				this.classeCSS1 = true 
			} else {
				this.classeCSS1 = false
			}
		}
	}
})
