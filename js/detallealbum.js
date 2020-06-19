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
    nombreAlbum.innerHTML = '<h1>' + detalle.title + '</h1>' ;

    let nombreArtist = document.querySelector ('.artistname') ;
    nombreArtist.innerHTML = '<a class="artist" href = "detalleartist.html?id='+detalle.artist.id+'"><h2>' + detalle.artist.name + '</h2>' ;

    let imagenArtista = document.querySelector ('.hola') ;
    imagenArtista.innerHTML = '<img class="img" src="' + detalle.artist.picture_big + '">';

    let salidaAlbum = document.querySelector ('.salidaalbum') ;
    salidaAlbum.innerHTML = '<h3>'+ 'Álbum • ' +detalle.release_date + '</h3>' ;
})

