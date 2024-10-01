//CRIAR UMA REQUISIÇÃO PARA RETORNAR UMA LISTA DE TODOS OS FILMES EXISTENTES ATRAVÉS DE UMA API

//CRIANDO A REQUISIÇÃO fetch - GET - A URL LISTA OS FILMES MAIS ASSISTIDOS
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-br-US&page=1')
.then(resposta=> resposta.json())
.then((json)=>{

    var container = document.querySelector('.container')

    json.results.map((val) => {
        container.innerHTML += `
            <div class="tituloFilmes" style="cursor: pointer">
                ${val.title}
                <div class="descricao" style="display: none">${val.overview}</div>
                <hr>
            </div>
        `;
    });
    
    var titulos = document.querySelectorAll('.tituloFilmes');
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].addEventListener('click',  (t)=>{
            if(t.target.querySelector('.descricao').style.display === "none"){
                t.target.querySelector('.descricao').style.display = "block";
            }
            else{
                t.target.querySelector('.descricao').style.display = "none";
            }
        });
    }
    
    
})
