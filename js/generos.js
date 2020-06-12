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

            gnr +=      '<div class="gnr-div">'
            gnr +=           '<a href="generosDetalle.html?id='+listaGeneros[i].id+ '">'
            gnr +=              '<div class="img-div" style="background-image: url(' + listaGeneros[i].picture_big + ');">'
            gnr +=                  '<h2 class= "gnr-title">' +listaGeneros[i].name + '</h2>'
            gnr +=              '</div>'
            gnr +=           '</a>'
            gnr +=      '</div>'
    
            container.innerHTML += gnr;
            }
            
    }) 
