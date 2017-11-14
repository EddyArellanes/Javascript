let app= new Vue({
	el: '#app',
	data:{
		name: 'Eddy Arellanes Bastida',
		level: 'High Level'
	},
	filters:{
		uppercase: function(str){
			return str.toUpperCase()
		},
		lowercase: function(str){
			return str.toLowerCase()
		},
		capitalize: function(str){
			return str.charAt(0).toUpperCase()+str.slice(1);
		}
	}
});