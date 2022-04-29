const slide = document.querySelectorAll('.slider');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slideFunc(counter);
let timer = setInterval(autoSlide, 50000);


function autoSlide(){
    counter += 1;
    slideFunc(counter);
}

function moveSlide(n) {
    counter += n;
    slideFunc(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slideFunc(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 50000);
}

function slideFunc(n) {
    for(let i = 0; i < slide.length; i++) 
        slide[i].style.display = 'none';
    
    for(let i = 0; i < dot.length; i++) 
        dot[i].classList.remove('active');

    if(n > slide.length)
        counter = 1;
    
    if(n < 1)
        counter = slide.length;
    
    slide[counter - 1].style.display = 'block';
    dot[counter - 1].classList.add('active');
}