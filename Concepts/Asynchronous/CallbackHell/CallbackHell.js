/*
In order to handle multiple async request in order as you want, the only way to do this, is callback inside callback, etc. (here we don¿t know that is Promises yet  :D
*/ 
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
})