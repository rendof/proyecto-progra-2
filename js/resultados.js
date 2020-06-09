//RESULTADOS 
let queryString = location.search
    console.log (queryString)

let queryStringObj = new URLSearchParams(queryString)
    console.log (queryStringObj)

let search = queryStringObj.get('search');
    console.log (search) 

let proxy = 'https://cors-anywhere.herokuapp.com/';  
let urlArtist = proxy + 'https://api.deezer.com/search/artist?q=' + search
let urlAlbum = proxy + 'https://api.deezer.com/search/album?q=' + search
let urlTrack = proxy + 'https://api.deezer.com/search/track?q=' + search

var artist = document.querySelector('.r-artistas')
var album = document.querySelector('.r-albums')
var track = document.querySelector('.r-canciones')

//Búsqueda Artistas
fetch(urlArtist)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        let artistSrch = datos.data;
        console.log(artistSrch)

        for(var i=0; i<5; i++){
            let art = ''
            
            art += '<div class="content">'
            art +=      '<a href="detalleartist.html?id=?' + artistSrch[i].id + '">'
            art +=          '<img class="portadas" src="' + artistSrch[i].picture_small + '">'
            art +=          '<h3 class="artist-title">' + artistSrch[i].name + '</h3>'
            art +=      '</a>'  
            art +=  '<div/>'

            artist.innerHTML += art
        }
            
    })
   
    

//Busqueda Albums
fetch(urlAlbum)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        let albumSrch = datos.data
        console.log(albumSrch)

        for(var i=0; i<5; i++){
            let art = ''
            
            art += '<div class="content">'
            art +=      '<a href="detalleartist.html?id=?' + albumSrch[i].id + '">'
            art +=          '<img class="portadas" src="' +albumSrch[i].cover_small + '">'
            art +=          '<h3 class="artist-title">' +albumSrch[i].artist.name+ '</h3>'
            art +=      '</a>'  
            art +=  '<div/>'

            album.innerHTML += art
        }
    })

//Busqueda Tracks
fetch(urlTrack)
    .then(function(response){
        return response.json()
    })

    .then(function(datos){
        let trackSrch = datos.data
        console.log(trackSrch)

        for(var i=0; i<5; i++){
            let art = ''

            art += '<div class="content">'
            art +=      '<a href="detalletrack.html?id=?' + trackSrch[i].id + '">'
            art +=          '<img class="portadas" src="' +trackSrch[i].album.cover_small + '">'
            art +=          '<h2 class="artist-title">' +trackSrch[i].title+ '</h2>'
            art +=      '</a>'  
            art +=      '<a href="detalleartist.html?id=?' + trackSrch[i].artist.id + '">'
            art +=          '<p class="artist-info">' +trackSrch[i].artist.name+ '</p>'
            art +=      '</a>' 
            art +=  '<div/>'

            track.innerHTML += art
        }
    })
