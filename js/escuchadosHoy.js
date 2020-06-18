let listaid = Object.keys(sessionStorage);
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
  
    let container = document.querySelector('.recientes');
    console.log(container);
               let gnr = ''
               
               gnr +=      '<article>'
               gnr +=       '<h3 class= "gnr-title">' +listacanciones.title + " </h3>"
               gnr +=   	  '<audio controls= "audio"' + ' source src="' + listacanciones.preview +' " type="audio/mpeg">'
               gnr +=   	  '</audio> </article>'
               
               container.innerHTML += gnr;
               console.log(gnr)
   
}

window.onbeforeunload = function(){

    sessionStorage.clear();

}
   
