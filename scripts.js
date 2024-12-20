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




//Slider das avaliações
const slider = document.querySelector('.container-img-ava');
const slides = document.querySelectorAll('.container-img-ava img');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

btnNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSliderPosition();
});

btnPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSliderPosition();
});

