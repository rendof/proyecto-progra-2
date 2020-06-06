// Obtener datos de 1 track -> como ya tenemos datos dentro de nuestra url -> usamos esa info para obtener la info de ese id
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');
//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/track/' + idTrack;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let titulo = document.querySelector('.titulo');
        titulo.innerHTML += datos.title //ubicación del título dentro del objeto literal que me devuelve deezer

        let interprete = document.querySelector('.interprete');
        interprete.innerHTML += datos.artist.name

        let album = document.querySelector('.album');
        album.innerHTML += datos.album.title

        //Aqui agregamos el player
        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'
        

    })
    .catch(function(error){
        console.log (error);
    })

//? -> PASOS PARA AGREGAR TEMAS A UNA PLAYLIST

//* Paso 1: obtengo información del storage para ver que tiene adentro (por las dudas)
let recuperoStorage = localStorage.getItem('playlist') //puede ser que playlist esté o no esté

if (recuperoStorage == null){
    playlist = []; //si no hay nada -> creo un array vacío para meter datos
}   else{
    playlist = JSON.parse(recuperoStorage) //si hay datos -> recupero los datos y los transformo en un elemento que pueda operar
}

//* Paso 1.2: chequeo si la canción ya está en la playlist -> cambio el texto del botón
if(playlist.includes(idTrack)){//.inlcludes me responde si un elemento está o no -> le pregunto si está la canción a través del id específico de esa canción
    document.querySelector('.agregar').innerHTML = 'Quitar de la playlist';
} 

//* Paso 2: agregar un track a la playlist

let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(e){
    //Detenemos el a para que no nos redireccione
    e.preventDefault();

    //me fijo si el id está en la playlist
    if(playlist.includes(idTrack)){ //si el track está -> lo quitamos
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = 'Agregar a playlist'
    }   else{
        //le agrego esta canción (dato) a la playlist mediante su is
    playlist.push(idTrack) //.push me permite añadir datos a un elemento

    document.querySelector('.agregar').innerHTML = 'Quitar de la playlist'
    }

    //* Paso 3: guardar lista en local storage

    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);

    console.log (localStorage)

})





