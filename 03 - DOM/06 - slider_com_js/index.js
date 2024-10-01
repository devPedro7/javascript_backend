var lastIndex = 0; //pega a ultima imagem que tá aparecendo pra gente

var images = document.querySelectorAll('.container img'); //pega todas as imagens

document.querySelectorAll('.bullet-single').forEach((bullet, index) => { //corrigido para pegar cada bolinha e seu índice
    bullet.addEventListener('click', () => { //vamos pegar cada bolinha
        //alert(index); //quando clicarmos em cada bolinha, vai aparecer o índice dele
        let lastImage = images[lastIndex];
        let actualImage = images[index];
      
        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet'); // Corrigido: sem ponto

        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet'); // Corrigido: adiciona ao novo índice
        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        lastIndex = index;

    });
});
