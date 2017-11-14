let app= new Vue({
	el: '#app',
	data:{
		videogames:[
			{name:'Megaman X Series', value:"Megaman"},
			{name:'The Legend of Zelda',value:'TLOZ'},
			{name:'Castlevania',value:'Castlevania'}],
		gamesSelected:[]
	},
	methods:{
		send(){
			console.log(this.gamesSelected);
		}
	}	
	
});