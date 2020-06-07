// Obtener datos de 1 track -> como ya tenemos datos dentro de nuestra url -> usamos esa info para obtener la info de ese id
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idgenre = datos.get('id');
//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/genre/' + idgenre;

fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(datos){
        console.log(datos)
        let titulo = document.querySelector('.titulo');
        titulo.innerHTML += datos.name //ubicación del nombre dentro del objeto literal que me devuelve deezer

    })
   
    .catch(function(error){
        console.log (error);
    })


    let urlartists= proxy + 'https://api.deezer.com/genre/' + idgenre + 'artists'

fetch(urlartists)
.then(function(response){
    return response.json();
})

.then(function(datos){
    console.log(datos)
let ul = document.querySelector (".canciones")
ul += '<a href=""> <li>'+ datos.name+'</li></a>'
})

