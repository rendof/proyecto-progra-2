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
//artistas principales
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
            art +=          '<img class="portadas radius" src="' + artistSrch[i].picture_small  + '">'
            art +=      '</a>'  
            art +=      '<div class="res-alb-div">'
            art +=      '<a href="detalleartist.html?id=?' + artistSrch[i].id + '">'
            art +=          '<h3 class="artist-title margin-left">' + artistSrch[i].name + '</h3>'
            art +=      '</a>'  
            art +=      '</div>'
            art +=  '<div/>'

            artist.innerHTML += art
        }
            
    })
   //! añadir catch

//los demás artistas
fetch(urlArtist)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let ArtistMas = datos.data
        console.log(ArtistMas)

        for(var i=6; i<ArtistMas.length; i++){
            
            let art = ''
            
            art += '<div class="content">'
            art +=      '<a href="detalleartist.html?id=?' + ArtistMas[i].id + '">'
            art +=          '<img class="portadas radius" src="' + ArtistMas[i].picture_small  + '">'
            art +=      '</a>'  
            art +=      '<div class="res-alb-div">'
            art +=      '<a href="detalleartist.html?id=?' + ArtistMas[i].id + '">'
            art +=          '<h3 class="artist-title margin-left">' + ArtistMas[i].name + '</h3>'
            art +=      '</a>'  
            art +=      '</div>'
            art +=  '<div/>'

            masArtist.innerHTML += art
        }

    })

    let verMasArtist = document.querySelector('.a-artist')
    var masArtist = document.querySelector('.artist-div')
    var verMenosArtist = document.querySelector('.a-menos-artist')

//ver más
verMasArtist.addEventListener('click', function(event){
    event.preventDefault();
    masArtist.style.display = 'flex';
    verMasArtist.style.display = 'none';
    verMenosArtist.style.display = 'flex'
})
//ver menos
verMenosArtist.addEventListener('click', function(event){
    event.preventDefault();
    verMasArtist.style.display = 'flex'
    masArtist.style.display = 'none'
    verMenosArtist.style.display = 'none'
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
            art +=      '<a href="detallealbum.html?id=?' + albumSrch[i].id + '">'
            art +=          '<img class="portadas" src="' +albumSrch[i].cover_small + '">'
            art +=      '</a>'
            art +=      '<div class="res-alb-div">'
            art +=          '<a href="detallealbum.html?id=?' + albumSrch[i].id + '">'
            art +=              '<h2 class="artist-title">' + albumSrch[i].title + '</h2>'
            art +=          '</a>'
            art +=          '<a href="detalleartist.html?id=?' + albumSrch[i].artist.id + '">'
            art +=              '<p class="artist-info">' +albumSrch[i].artist.name+ '</p>'
            art +=          '</a>'  
            art +=      '</div>'
            art +=  '<div/>'

            album.innerHTML += art
        }
    })

//los demás albums
fetch(urlAlbum)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let AlbumMas = datos.data
        console.log(AlbumMas)

        for(var i=6; i<AlbumMas.length; i++){
            
            let arti = ''
            
            arti += '<div class="content">'
            arti +=      '<a href="detallealbum.html?id=?' + AlbumMas[i].id + '">'
            arti +=          '<img class="portadas" src="' +AlbumMas[i].cover_small + '">'
            arti +=      '</a>'
            arti +=      '<div class="res-alb-div">'
            arti +=         '<a href="detallealbum.html?id=?' + AlbumMas[i].id + '">'
            arti +=             '<h2 class="artist-title">' + AlbumMas[i].title + '</h2>'
            arti +=         '</a>'
            arti +=         '<a href="detalleartist.html?id=?' + AlbumMas[i].artist.id + '">'
            arti +=             '<p class="artist-info">' +AlbumMas[i].artist.name+ '</p>'
            arti +=         '</a>'  
            arti +=      '</div>'
            arti +=  '<div/>'

            masAlbum.innerHTML += arti
        }

    })

    let verMasAlbum = document.querySelector('.a-album')
    var masAlbum = document.querySelector('.album-div')
    var verMenosAlbum = document.querySelector('.a-menos-album')

//ver más
verMasAlbum.addEventListener('click', function(event){
    event.preventDefault();
    masAlbum.style.display = 'flex';
    verMasAlbum.style.display = 'none';
    verMenosAlbum.style.display = 'flex';
})
//ver menos
verMenosAlbum.addEventListener('click', function(event){
    event.preventDefault();
    verMasAlbum.style.display = 'flex';
    masAlbum.style.display = 'none';
    verMenosAlbum.style.display = 'none';
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
            art +=      '</a>'
            art +=      '<div class="res-alb-div">'
            art +=          '<a href="detalletrack.html?id=?' + trackSrch[i].id + '">'
            art +=              '<h2 class="artist-title">' +trackSrch[i].title+ '</h2>'
            art +=          '</a>'  
            art +=          '<a href="detalleartist.html?id=?' + trackSrch[i].artist.id + '">'
            art +=              '<p class="artist-info">' +trackSrch[i].artist.name+ '</p>'
            art +=          '</a>'
            art +=      '</div>'
            art +=  '<div/>'

            track.innerHTML += art
        }
    })

//los demás Tracks
fetch(urlTrack)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let TrackMas = datos.data
        console.log(TrackMas)

        for(var i=6; i<TrackMas.length; i++){
            
            let art = ''
            
            art += '<div class="content">'
            art +=      '<a href="detalletrack.html?id=?' + TrackMas[i].id + '">'
            art +=          '<img class="portadas" src="' +TrackMas[i].album.cover_small + '">'
            art +=      '</a>'
            art +=      '<div class="res-alb-div">'
            art +=          '<a href="detalletrack.html?id=?' + TrackMas[i].id + '">'
            art +=              '<h2 class="artist-title">' +TrackMas[i].title+ '</h2>'
            art +=          '</a>'  
            art +=          '<a href="detalleartist.html?id=?' + TrackMas[i].artist.id + '">'
            art +=              '<p class="artist-info">' +TrackMas[i].artist.name+ '</p>'
            art +=          '</a>'
            art +=      '</div>'
            art +=  '<div/>'

            masTrack.innerHTML += art
        }

    })

    let verMasTrack = document.querySelector('.a-track')
    var masTrack = document.querySelector('.track-div')
    var verMenosTrack = document.querySelector('.a-menos-track')

//ver más
verMasTrack.addEventListener('click', function(event){
    event.preventDefault();
    masTrack.style.display = 'flex';
    verMasTrack.style.display = 'none';
    verMenosTrack.style.display = 'flex';
})
//ver menos
verMenosTrack.addEventListener('click', function(event){
    event.preventDefault();
    verMasTrack.style.display = 'flex';
    masTrack.style.display = 'none';
    verMenosTrack.style.display = 'none';
})