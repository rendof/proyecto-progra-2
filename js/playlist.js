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
               gnr +=   	  '<audio style="width: 75%" onplay="añadirRecientes(\''+listacanciones.id + '\' ) "controls= "audio"' + ' source src="' + listacanciones.preview +' " type="audio/mpeg">'
               gnr +=   	  '</audio> </article>'
               
               container.innerHTML += gnr;
               console.log(gnr)
   
}

//funcion para mandar la cancion a la p[laylist "sessiomn storage"]
function añadirRecientes(idsong){
    console.log(idsong)
    if(idsong in sessionStorage) {
       
    }
    else{ 
        sessionStorage.setItem(idsong, idsong);

        var guardadoSession = sessionStorage.getItem(idsong);

        //console.log('idsong',guardado);
    
    }
}
   
//gnr +=   	  '<audio onplay="añadirRecientes(\''+listaTemas[i].id + '\' ) "controls= "audio"' + ' source src="' + listaTemas[i].preview +' " type="audio/mpeg" style="margin-left:31px;margin-bottom:7px;">'