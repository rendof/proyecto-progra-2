let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtist = datos.get('id');

//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/' + idArtist;
let urlsongs = proxy + 'https://api.deezer.com/artist/' + idArtist + '/top?limit=10';
let urlalbums = proxy + 'https://api.deezer.com/artist/' + idArtist + '/albums';
console.log(urlalbums);
let temas =null;  //quiere decir que no tiene cargado ningun valor 
let songsesion = null;
let id = 0; 
let datosalbum= null;


fetch(urlalbums)
    .then(function(response){
        return response.json();
    })
    .then(function(datosalbum){
        console.log(datosalbum);
        let container = document.querySelector('.content_albums')
        let topAlbum = datosalbum.data

        for(var i=0; i<10; i++){
            let art = ''
            
            art += '<div class="music">'
            art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
            art +=      '<div class="div-img">'
            art +=          '<img class="portadas mobile cuadrado" src="' + topAlbum[i].cover_medium + '">'
            art +=      '</div>'
            art +=      '</a>'
            art +=      '<div id="div-alb"'
            art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
            art +=          '<h3 class="artist-title">' + topAlbum[i].title +'</h3>'
            art +=      '</a>'
            art +=      '</div>'
            art += '</div>'

            container.innerHTML += art;
        }
       
    })



fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
       console.log(datos);

       let container = document.querySelector('.content_artista')
       let topArtist = datos;

       
           let art = ''
           
           art += '<div class="music">'
           art +=      '<a href="detalleartist.html?id='+topArtist.id+ '">'
           art +=          '<img class="portadas mobile radius" src="' + topArtist.picture_medium + '">'
           art +=      '</a>'
           art +=      '<a href="detalleartist.html?id='+topArtist.id+ '">'
           art +=      '<div class="artist-title-div">'
           art +=          '<h3 class= "artist-title mrg-btn ">' +topArtist.name + '</h3>'
           art +=      '</div>'
           art +=      '</a>'
           art += '</div>'

           container.innerHTML += art;
       
            
       
    })
//funcion para mandar la cancion a la p[laylist "local storage"]
function cancionAplaylist(idsong){
    //console.log(idsong)
if(idsong in localStorage) {
    alert('esta cancion ya esta en tu playlist')
 }
 else{ 
    localStorage.setItem(idsong, idsong);

    var guardado = localStorage.getItem(idsong);

    //console.log('idsong',guardado);
   
}
}
    fetch(urlsongs)
    .then(function(response){
        return response.json();
    })

    .then(function(datos){
        temas=datos;
        
        let container = document.querySelector(".content_tracks");
        let listaTemas = temas.data;
        

        for(var i=1; i<listaTemas.length; i++){
            
            let gnr = ''
            gnr += 		'<div class="music laptop mrg-btn">'
          	gnr +=      '<p class="puesto">' +[i]+ '° </p>'
            gnr +=      '<a href="detallealbum.html?id='+ listaTemas[i].id+ '">'
            gnr +=      '<div class="div-img">'
            gnr +=           '<img class="portadas mobile laptop autoheight filtro" src="' + listaTemas[i].album.cover_medium + '">'
            gnr +=      '</div>'
            gnr +=      '</a>'
            gnr +=      '<article>'
            gnr +=       '<h3 class= "gnr-title" style="color:white;margin-left:10px" >' +listaTemas[i].title + '<button style="margin-left:5px;" onclick="cancionAplaylist(\''+listaTemas[i].id + '\' )"> <i class="fa fa-plus" aria-hidden="true"></i></button></h3>'
            gnr +=   	  '<audio controls= "audio"' + ' source src="' + listaTemas[i].preview +' " type="audio/mpeg" style="margin-left:31px;margin-bottom:7px;">'
            gnr +=   	  '</audio> </article>';
            gnr +=      '</div>'
            container.innerHTML += gnr;

            }

        
       //falta que el button los guarde los temas en el local storage
       
    })
    console.log(urlalbums)

    



   