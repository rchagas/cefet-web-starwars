// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
let movies = document.getElementById('movies');
$.ajax({
  url: 'http://swapi.co/api/films',
  success: function(resposta) {
    console.log(resposta);
    /*let sw = JSON.parse(resposta);
    let html;
    for(){
        
    }*/
  }
});