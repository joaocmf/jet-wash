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




function mostrarMenu(){
    document.getElementById("")
}










