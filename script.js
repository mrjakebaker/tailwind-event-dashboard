new Vue({
  el: '#app',
  data () {
    return {
      info: null,
	  notificationShade: 'true'
    }
  },
	  methods: {
		 toogle () {
			this.spanVisible = !this.notificationShade
		}
    }
})