let queryString = location.search;
let datos = new URLSearchParams(queryString);

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/genre'

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)

        let container = document.querySelector('.gnr-container')
        let listaGeneros = datos.data

        for(var i=1; i<listaGeneros.length; i++){
            let gnr = ''

            gnr +=      '<article>'
            gnr +=           '<a href="generosDetalle.html?id='+listaGeneros[i].id+ '">'
            gnr +=               '<img class="gnr-img" src="' + listaGeneros[i].picture_medium +'"</img>'
            gnr +=           '</a>'
            gnr +=           '<a href="generosDetalle.html?id='+listaGeneros[i].id+ '">'
            gnr +=               '<h2 class= "gnr-title">' +listaGeneros[i].name + '</h2>'
            gnr +=           '</a>'
            gnr +=      '</article>'
    
            container.innerHTML += gnr;
            }
            
    })
    