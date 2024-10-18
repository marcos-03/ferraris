function mudarImagem(imagem) {
    document.body.style.backgroundImage = `url(${imagem})`;
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
}


window.onload = function() {
    mudarImagem('imagem1.jpeg'); 
};