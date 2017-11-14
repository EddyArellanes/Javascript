let app= new Vue({
	el: '#app',
	data:{
		count:0
	},
	methods:{
		sum: function(){
			this.count++;
		},
		less: function(){
			this.count--;
		}
	}	
	
});