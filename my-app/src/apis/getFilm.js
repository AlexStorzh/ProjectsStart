

function GetFilm(filmName) {
  fetch(`http://www.omdbapi.com/?apikey=${filmName}&`)
  .then(res => {console.log(res)})
 }
 
        
GetFilm('Shrek')