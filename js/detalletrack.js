let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');


let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let url = proxy + 'https://api.deezer.com/track/' + idTrack ;

fetch (url)

.then (function (respuesta) 
{
    return respuesta.json()
})
.then (function (datatrack){
    console.log (datatrack)
    let nombreTrack = document.querySelector ('.tracknombre') ;
    nombreTrack.innerHTML = '<h1>' + datatrack.title + '</h1>' ;
    let imagen = document.querySelector ('.img')
    imagen.innerHTML = '<img class= "imagen" src="' + datatrack.artist.picture_big + '" >'
    let nombreArtist = document.querySelector ('.nombreartist')
    nombreArtist.innerHTML = '<h2>' + datatrack.artist.name + '</h2>'
    let cancion = document.querySelector ('.audio')
    cancion.innerHTML = '<iframe class= "cancion" src = "' + datatrack.preview +'"></iframe>'
    let duration = document.querySelector ('.duracion')
    duration.innerHTML = '<h3>' + datatrack.duration + ' segundos' + '</h3>'
    let nameAlbum = document.querySelector ('.nombrealbum')
    nameAlbum.innerHTML = '<h4>' + 'Álbum ' + datatrack.album.title + '</h4>'
    let button = document.querySelector ('.boton') 
    button.innerHTML = '<button>' + detalle + '</button>'
})

// agregar track a la playlist
   let button = document.querySelector ('.boton')
        button.onclick = function () {
               alert ('Se ha agregado a tu playlist')
        }

