new Vue({
	el: '#app',
	data() {
		return {
			info: null,
			isOpen: 'true'
		}
	},
	methods: {
		toggle: function () {
			this.isOpen = !this.isOpen
		}

	}
})