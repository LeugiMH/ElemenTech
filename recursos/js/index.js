function toggleElement(btn){

    const secElementos = document.querySelectorAll("section[class~=elemento]");
    const menuElementos = document.getElementById("secElementos");
    const btnLink = btn.getAttribute("href");
    const elementoSelecionado = document.querySelector(btnLink);

    //d-none para todos as seções
    secElementos.forEach((element, index) => {
        element.classList = "sec container-fluid elemento d-none";
    });

    //Visualizando o elemento selecionado
    elementoSelecionado.classList = "sec container-fluid elemento";

    //Atualizando a imagem
    switch(btnLink){
        case "#terra":
            menuElementos.className = "sec container-fluid bgImgSetup imgTerra";
        break;
        case "#agua":
            menuElementos.classList = "sec container-fluid bgImgSetup imgAgua";
        break;
        case "#fogo":
            menuElementos.classList = "sec container-fluid bgImgSetup imgFogo";
        break;
        case "#ar":
            menuElementos.classList = "sec container-fluid bgImgSetup imgAr";
        break;
    }
}