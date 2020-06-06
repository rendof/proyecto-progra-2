//Playlsit

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage); //recupero los datos que tengo en el storage y los transforo en un array

let playlistWrapper = document.querySelector('.playlistWrapper');

if(recuperoStorage == null){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
} else{

    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
        });
}
function buscarYMostrarTrack(idTrack){ //podríamos haber puesto todo esto adentro del ForEach
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(track){
            playlistWrapper.innerHTML += '<li>'+'<a href="track.html?id='+track.id+ '">'+ track.title + '</a></li>'
        })

        .catch(function(error){
        console.log (error);
        })
};
