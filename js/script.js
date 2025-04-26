let botao = document.querySelector(".botao-menu");
let menu = document.querySelector(".menu");

//add - adicionar / event = evento / listener - ouvinte

botao.addEventListener('click', () => {
    menu.classList.toggle("ativo")
})