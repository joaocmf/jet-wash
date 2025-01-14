let cont = 1;
let radio = document.querySelector('.manual-btn');
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000)

function proximaImg(){
    cont++;
    if(cont > 3){
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}




/*function mostrarMenu(){
    const menuBtn = document.getElementById("menu-icon");
    const divLinks = document.querySelectorAll("a");

    menuBtn.addEventListener("click", () => {
        // Esconde o botão
        menuBtn.style.display = "none";
        divLinks.style.display = "block";

    })

}
    */



function mostrarMenu() {
    const menuBtn = document.getElementById("menu-icon");
    const links = document.querySelectorAll("a");
    let menuAberto = false;
    const menu = document.querySelector("ul"); // Seleciona apenas o primeiro <ul>

    menuBtn.addEventListener("click", () => {
        menuAberto = !menuAberto; // Alterna o estado do menu

        if (menuAberto) {
            // Exibe os links e aplica estilos
            menu.style.display = "block";
            menu.style.backgroundColor = "#5c5c5c";
            links.forEach(link => {
                link.style.display = "block";
                link.style.transition = "all 0.5s ease";
            });
        } else {
            // Oculta o menu
            menu.style.display = "none";
        }
    });

    document.addEventListener("click", (event) => {
        if (!menuBtn.contains(event.target) && !menu.contains(event.target)) {
            // Oculta o menu se o clique não for no botão ou no menu
            menuAberto = false;
            menu.style.display = "none";
        }
    });
}


















