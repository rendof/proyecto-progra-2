let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');
//estos tres pasos nos permite obtener el id de la url

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/' + idTrack;



fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)

        let fran = document.querySelector('.artista')   
        fran.innerHTML += '<h2>' + datos.name+ '</h2>';
        fran.innerHTML += '<img src= "' + datos.picture + '">';
            
       
    })


   