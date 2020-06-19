let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');



let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let url = proxy + 'https://api.deezer.com/album/' + idTrack;

fetch (url)
.then (function (respuesta)
{
    return respuesta.json();
})
.then (function (detalle){
    console.log (detalle); 
    let nombreAlbum = document.querySelector ('.tituloalbum');
    nombreAlbum.innerHTML = '<h1>' + detalle.title + '<h1>' ;

    let nombreArtist = document.querySelector ('.artistname') ;
    nombreArtist.innerHTML = '<a class="artist" href = "detalleartist.html?id='+detalle.artist.id+'"><p>' + detalle.artist.name + '</p>' ;

    let imagenArtista = document.querySelector ('.hola') ;
    imagenArtista.innerHTML = '<img class="img" src="' + detalle.artist.picture_big + '">';

    let salidaAlbum = document.querySelector ('.salidaalbum') ;
    salidaAlbum.innerHTML = '<p>'+ 'Álbum • ' +detalle.release_date + '</p>' ;
    

    fetch (proxy + detalle.tracklist)
    .then (function (respuesta)
{
    return respuesta.json();
})
    .then (function (top){
         console.log (top); 
         let data = top.data ; 
         let trk = document.querySelector ('.top') ;
         for ( let i = 0 ; i<15 ; i++) {
         trk.innerHTML += '<li> <h1>' + data [i].title + '</h1> <audio controls> <source src = "' + data[i].preview + '" type="audio/mpeg"></audio></li>';
         }


     })
})

