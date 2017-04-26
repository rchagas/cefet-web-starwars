// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
//let movies = document.getElementById('movies');
let movies = document.querySelector('#movies ul');
let url = 'https://swapi.co/api/films'
const guide = [[4,'I'],[5,'II'],[6,'III'],[1,'IV'],[2,'V'],[3,'VI'],[7,'VII']];
let aux = '';
for(let i=0 ; i<guide.length ; i++){
     aux += '<li data-episode-url='+url+'/'+guide[i][0]+'/>Episode '+guide[i][1]+'</li>';
}
movies.innerHTML = aux;
let episodes = document.querySelectorAll('#movies li');
for(let episode of episodes ){
    episode.addEventListener('click', texto);
}
function texto(){
    $.ajax({
    url: this.getAttribute('data-episode-url'),
    success: function(resposta) {
      document.querySelector('.reading-animation').innerHTML =  
              'Episode '+guide[resposta.episode_id-1][1]+'\n'
              +resposta.title+'\n\n'+resposta.opening_crawl;
    }
  });
}

