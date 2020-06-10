let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');

//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/' + idTrack;
let urlsongs = proxy + 'https://api.deezer.com/artist/' + idTrack + '/top?limit=5';
let temas =null;
let songsesion = null;




fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        let fran = document.querySelector('.artista')   
        fran.innerHTML += '<h2>' + datos.name+ '</h2>';
        fran.innerHTML += '<img src= "' + datos.picture + '">';
            
       
    })
//funcion para mandar la cancion a la p[laylist "sesion storage"]
function cancionAplaylist(name){
    console.log(name)
   /* songsesion = { 
        nombre:nombre, 
        url:url
    };*/
}
    fetch(urlsongs)
    .then(function(response){
        return response.json();
    })

    .then(function(datos){
        temas=datos;
        
        let container = document.querySelector('.songs');
        let listaTemas = temas.data;
        

        for(var i=0; i<listaTemas.length; i++){
            
            let gnr = ''

            gnr +=      '<article>'
            gnr +=       '<h3 class= "gnr-title">' +listaTemas[i].title + '<button onclick="cancionAplaylist()"> <i class="fa fa-plus" aria-hidden="true"></i></button></h3>'
            gnr +=   	  '<audio controls= "audio"' + ' source src="' + listaTemas[i].preview +' " type="audio/mpeg">'
            gnr +=   	  '</audio> </article>';
            
            container.innerHTML += gnr;

            }

        
       //falta que el button los guarde los temas en el local storage
    })




   