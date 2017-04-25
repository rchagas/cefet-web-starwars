// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
//let movies = document.getElementById('movies');
let movies = $('#movies > ul');
movies.innerHTML = '\n';
const romano = ['I','II','III','IV','V','VI','VII'];
$.ajax({
  url: 'http://swapi.co/api/films',
  success: function(resposta) {
    for(let i=0; i<resposta.count ; i++){
        movies.append('<li>Episode'+romano[i]+'</li>');
    }
  }
});
