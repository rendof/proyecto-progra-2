// Obtener datos de 1 track -> como ya tenemos datos dentro de nuestra url -> usamos esa info para obtener la info de ese id
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idgenre = datos.get('id');
let datosradio = new URLSearchParams(queryString);
//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/genre/' + idgenre;

//let url = proxy + 'https://api.deezer.com/tracks/genre/' + idgenre;


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

let urlartists= proxy + 'https://api.deezer.com/genre/' + idgenre + '/artists'

fetch(urlartists)
    .then(function(response){
        return response.json();
    })

    .then(function(datos){
        console.log(datos)
        //console.log(datos.data)     
        let container = document.querySelector('.content-artista')
        let topArtist = datos.data

        for(var i=0; i<10; i++){
            let art = ''
            
            art += '<div class="music">'
            art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
            art +=          '<img class="portadas" src="' + topArtist[i].picture_medium + '">'
            art +=      '</a>'
            art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
            art +=          '<div class="div-artist">'
            art +=              '<h3 class= "artist-title ">' +topArtist[i].name + '</h3>'
            art +=          '</div>'
            art +=      '</a>'
            art += '</div>'

            container.innerHTML += art;
        }
    })


/*CANCIONES
let urlradios= proxy + 'https://api.deezer.com/genre/' + idgenre + '/radios'

fetch(urlradios)
.then(function(response){
    return response.json();
})

.then(function(datosradio){
    console.log(datosradio)
let ul = document.querySelector (".canciones")
ul += '<a href=""> <li>'+ datos.name+'</li></a>'
})
*/



