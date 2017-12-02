/*
El modo estricto hace varios cambios en la semántica normal de JavaScript. Primero, elimina algunos errores silenciosos de JavaScript haciendo que lancen excepciones. Segundo, corrige errores que hacen que sea difícil para los motores de JavaScript realizar optimizaciones: a veces, el código escrito en modo estricto puede correr más rápido que el que no es estricto. Tercero, el modo estricto prohibe cierta sintaxis que es probable que sea definida en futuras versiones de ECMAScript.
*/

'use strict'

/*
El Objeto app controla toda la aplicación de Electron, permite controlar los eventos, ciclo de vida, etc.
*/
const {app, BrowserWindow}= require('electron')
console.dir(app)
app.on('before-quit',()=>{
	console.log('Saliendo..')
})
app.on('ready', ()=>{
	//BrowserWindow is a Object that optional receive properties like widht, height, etc.

	let win= new BrowserWindow({
		width:1080,
		height:720,
		center:true,
		maximizable:true,
		title:'Hello Universe :D',
		//Hide the initial Window
		show:false
		
	})
	//Will appear till loadURL charges
	win.once('ready-to-show',()=>{
		win.show()
	})

	win.loadURL('https://eddyarellanes.github.io')

	win.on('move',()=>{
		const position= win.getPosition()
		console.log(`La posición es ${position}`)
	})
	win.on('close',()=>{
		win= null
		app.quit()		
	})

})
