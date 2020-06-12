let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let url = proxy + 'https://api.deezer.com/album/302127' ;

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
    nombreArtist.innerHTML = '<h2>' + detalle.artist.name + '</h2>' ;

    let imagenArtista = document.querySelector ('.hola') ;
    imagenArtista.innerHTML = '<img src="' + detalle.artist.picture_big + '">';

    let salidaAlbum = document.querySelector ('.salidaalbum') ;
    salidaAlbum.innerHTML = '<h3>' +detalle.release_date + '</h3>' ;
})