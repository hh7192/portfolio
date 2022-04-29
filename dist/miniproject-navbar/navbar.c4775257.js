// change navbar styles on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});
// show/hide abouts answer
const abouts = document.querySelectorAll('.about');
abouts.forEach((about)=>{
    about.addEventListener('click', ()=>{
        about.classList.toggle('open');
        // change icon
        const icon = about.querySelector('.about__icon i');
        if (icon.className === 'uil uil-plus-circle') icon.className = 'uil uil-minus-circle';
        else icon.className = 'uil uil-plus-circle';
    });
});
// show navbar toggle 
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
menuBtn.addEventListener('click', ()=>{
    // for showing menu on click and replacing menu icon with close icon
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});
// close nav menu
closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
});
// button ripple
const buttons = document.querySelectorAll('.ripple');
buttons.forEach((btn)=>{
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(()=>{
            ripples.remove();
        }, 1000);
    });
});
// scrollbar effect
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = window.scrollY / totalHeight * 100;
    progress.style.height = progressHeight + '%';
};
// overview header
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 1 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
});

//# sourceMappingURL=navbar.c4775257.js.map
