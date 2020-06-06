window.addEventListener('load', function() {
    
    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let urlartists = proxy + 'https://api.deezer.com/chart/0/artists'
    let urltracks = proxy + 'https://api.deezer.com/chart/0/tracks'
    let urlalbums = proxy + 'https://api.deezer.com/chart/0/albums'
    
    
    //Artistas
    fetch(urlartists)
        .then(function(response){
            
            return response.json();
        })
        .then(function(datos){  
            //console.log(datos.data)     
            let container = document.querySelector('.content_artista')
            let topArtist = datos.data
    
            for(var i=0; i<6; i++){
                let art = ''
                
                art += '<div class="music-artist">'
                art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
                art +=          '<img class="portadas" src="' + topArtist[i].picture_medium + '">'
                art +=      '</a>'
                art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
                art +=          '<h3 class= "artist-title">' +topArtist[i].name + '</h3>'
                art +=      '</a>'
                art += '</div>'
    
                container.innerHTML += art;
            }
        })
    
    fetch(urlalbums)
        .then(function(response){
            
            return response.json();
        })
        .then(function(datos){  
           // console.log(datos.data)     
            let container = document.querySelector('.content_albums')
            let topAlbum = datos.data
    
            for(var i=0; i<6; i++){
                let art = ''
                
                art += '<div class="music">'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=          '<img class="portadas" src="' + topAlbum[i].cover_medium + '">'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=          '<h3 class="artist-title">' + topAlbum[i].title +'</h3>'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=          '<p class= "artist-info">' + topAlbum[i].artist.name + '</p>'
                art +=      '</a>'
                art += '</div>'
    
                container.innerHTML += art;
            }
        })
    //Tracks
    fetch(urltracks)
        .then(function(response){
            
            return response.json();
        })
        .then(function(datos){  
            console.log(datos.data)     
            let container = document.querySelector('.tracks')
            let topTracks = datos.data
    
            for(var i=0; i<3; i++){
                let art = ''
                
                art += '<div class="music laptop">'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=          '<img class="portadas laptop autoheight filtro" src="' + topTracks[i].album.cover_medium + '">'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=          '<h3 class="artist-title">' + topTracks[i].title +'</h3>'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=          '<p class= "artist-info">' + topTracks[i].artist.name + '</p>'
                art +=      '</a>'
                art += '</div>'
    
                container.innerHTML += art;
            }
        })
})

