let queryString = location.search;
let datos = new URLSearchParams(queryString);

let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let url = proxy + 'https://api.deezer.com/artist/10583405' ;

fetch (url)
.then (function (respuesta)
{
    return respuesta.json();
})
.then (function (detalle){
    console.log (detalle); 
    let nombreArtista = document.querySelector ('.title');
    nombreArtista.innerHTML = '<h1>' + detalle.name + '</h1>' ;
    let imagenArtista = document.querySelector ('.BBprincipal') ;
    imagenArtista.innerHTML = '<img src="' + detalle.picture_big + '">';
    let numSeguidores = document.querySelector ('.seguidores') ;
    numSeguidores.innerHTML = '<h1>' +detalle.nb_fan + '</h1>' ;
    fetch (proxy + detalle.tracklist)
    .then (function (respuesta)
{
    return respuesta.json();
})
.then (function (top){
         console.log (top); 
         let data = top.data ; 
         let fran = document.querySelector ('.top') ;
         for ( let i = 0 ; i<5 ; i++) {
         fran.innerHTML += '<li> <h1>' + data [i].title + '</h1> <audio controls> <source src = "' + data[i].link + '" type="audio/mpeg"></audio></li>';
}


})
})

