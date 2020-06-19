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
    nombreArtist.innerHTML = '<a class="link" href = "detalleartist.html?id='+datatrack.artist.id+'">'+'<h2>' + datatrack.artist.name + '</h2>'
    let cancion = document.querySelector ('.audio')
    cancion.innerHTML = '<audio class="cancion" style=" display:block; margin:auto; " onplay="añadirRecientes("889550852" ) " controls="audio" source="" src="' +datatrack.preview+ '" type="audio/mpeg" ></audio>'
    let duration = document.querySelector ('.duracion')
    duration.innerHTML = '<h3>' + datatrack.duration + ' segundos' + '</h3>'
    let nameAlbum = document.querySelector ('.nombrealbum')
    nameAlbum.innerHTML = '<a class= "link" href = "detallealbum.html?id='+datatrack.album.id+'"><h4>' + 'Álbum ' + datatrack.album.title + '</h4>'
    //let button = document.querySelector ('.boton') 
    //button.innerHTML = '<button>' + detalle + '</button>'
})

// agregar track a la playlist
   let button = document.querySelector ('.boton')
        button.onclick = function () {
               alert ('Se ha agregado a tu playlist')
        }


    
//agregados recientemente
    
    function armaraudio(listacanciones,key){
  
        let container = document.querySelector('.playlist');
        console.log(container);
                   let gnr = ''
                   
                   gnr +=      '<article>'
                   gnr +=       '<h3 class= "gnr-title">' +listacanciones.title + '<button style="margin-left:15px" onclick="sacardeplaylist(\''+key+ '\' )"> <i class="fa fa-ban" aria-hidden="true"></i></button></h3>'
                   gnr +=   	  '<audio class="audio-movile"style="width: 75%" onplay="añadirRecientes(\''+listacanciones.id + '\' ) "controls= "audio"' + ' source src="' + listacanciones.preview +' " type="audio/mpeg">'
                   gnr +=   	  '</audio> </article>'
                   
                   container.innerHTML += gnr;
                   console.log(gnr)
       
    }
    
    //funcion para mandar la cancion a recientes "sessiomn storage"]
    function añadirRecientes(idsong){
        console.log(idsong)
        if(idsong in sessionStorage) {
           
        }
        else{ 
            sessionStorage.setItem(idsong, idsong);
    
            var guardadoSession = sessionStorage.getItem(idsong);
    
        
        }
    }
    
    
      
