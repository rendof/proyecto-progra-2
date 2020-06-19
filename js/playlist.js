let listaid = Object.keys(localStorage);
let datos = null;
let cancionedDePlaylist = [];


for (let index = 0; index < listaid.length; index++) {
  //  console.log(index)
   // console.log(listaid[index])

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + listaid[index];
    //console.log(url);
    obtenercancion(url,listaid[index]);
   // const element = array[index];
    
};

function obtenercancion(urlcancion,key){
    //console.log(urlcancion);
    fetch(urlcancion)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        armaraudio(datos,key);
    })

};

function sacardeplaylist(key){
    localStorage.removeItem(key);
    location.reload();

}

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

// ESCUCHADOS RECIENTEMENTE

let listaid2 = Object.keys(sessionStorage);
let datos2 = null;
let cancionesDePlaylist2 = [];


for (let index = 0; index < listaid2.length; index++) {

    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + listaid2[index];
  
    obtenercancion2(url,listaid2[index]);
  
    
};

function obtenercancion2(urlcancion,key){
   
    fetch(urlcancion)
    .then(function(response){
        return response.json();
    })
    .then(function(datos2){
        armaraudio2(datos2);
    })

};


function armaraudio2(listacanciones){
  
    let container = document.querySelector('.recientes');
    console.log(container);
               let gnr = ''
               
               gnr +=      '<article>'
               gnr +=       '<h3 class= "gnr-title">' +listacanciones.title + '<button style="margin-left:5px;" onclick="cancionAplaylist(\''+listacanciones.id + '\' )"> <i class="fa fa-plus" aria-hidden="true"></i></button> </h3>'
               gnr +=   	  '<audio controls= "audio"' + ' source src="' + listacanciones.preview +' " type="audio/mpeg">'

               gnr +=   	  '</audio> </article>'
               
               container.innerHTML += gnr;
               console.log(gnr)
   
               
}

function cancionAplaylist(idsong){
    //console.log(idsong)
if(idsong in localStorage) {
    alert('esta cancion ya esta en tu playlist')
 }
 else{ 
    localStorage.setItem(idsong, idsong);

    var guardado = localStorage.getItem(idsong);
    alert('Ya agregamos esta cancion a tu playlist refresca la pagina para eliminar los escuchados recientemente y disfrutar de tu musica en la playlist.')

    //console.log('idsong',guardado);
   
}}

window.onbeforeunload = function(){

    sessionStorage.clear();

}
   
