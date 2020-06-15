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
    
            for(var i=0; i<10; i++){
                let art = ''
                
                art += '<div class="music">'
                art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
                art +=          '<img class="portadas mobile radius" src="' + topArtist[i].picture_medium + '">'
                art +=      '</a>'
                art +=      '<a href="detalleartist.html?id='+topArtist[i].id+ '">'
                art +=      '<div class="artist-title-div">'
                art +=          '<h3 class= "artist-title mrg-btn ">' +topArtist[i].name + '</h3>'
                art +=      '</div>'
                art +=      '</a>'
                art += '</div>'
    
                container.innerHTML += art;
            }
            

          
                
            
        })
    //Albums
    fetch(urlalbums)
        .then(function(response){
            
            return response.json();
        })
        .then(function(datos){  
            //console.log(urlalbums)     
            let container = document.querySelector('.content_albums')
            let topAlbum = datos.data
    
            for(var i=0; i<10; i++){
                let art = ''
                
                art += '<div class="music">'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=      '<div class="div-img">'
                art +=          '<img class="portadas mobile cuadrado" src="' + topAlbum[i].cover_medium + '">'
                art +=      '</div>'
                art +=      '</a>'
                art +=      '<div id="div-alb"'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=          '<h3 class="artist-title">' + topAlbum[i].title +'</h3>'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topAlbum[i].id+ '">'
                art +=          '<p class= "artist-info">' + topAlbum[i].artist.name + '</p>'
                art +=      '</a>'
                art +=      '</div>'
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
            //console.log(datos.data)     
            let container = document.querySelector('.content_tracks')
            let topTracks = datos.data
    
            for(var i=0; i<10; i++){
                let art = ''
                
                art += '<div class="music laptop mrg-btn">'
                art +=      '<p class="puesto">' +[i+1]+ '° </p>'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=      '<div class="div-img">'
                art +=           '<img class="portadas mobile laptop autoheight filtro" src="' + topTracks[i].album.cover_medium + '">'
                art +=      '</div>'
                art +=      '</a>'
                art +=      '<div id="div-trk">'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=          '<h3 class="artist-title">' + topTracks[i].title +'</h3>'
                art +=      '</a>'
                art +=      '<a href="detallealbum.html?id='+ topTracks[i].id+ '">'
                art +=          '<p class= "artist-info">' + topTracks[i].artist.name + '</p>'
                art +=      '</a>'
                art +=      '</div>'
                art += '</div>'
    
                container.innerHTML += art;
            }
        })
    
    
})

