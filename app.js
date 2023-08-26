// making it compatible with mobile

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// parallax scrolling -- background moves as we scroll

window.addEventListener("DOMContentLoaded", scrollLoop, false)

const background = document.querySelector("#background");
// horizontal scrolling
let xScrollPosition;

// vertical scrolling
let yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.2, background);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xpos,ypos, el){
    el.style.transform= "translate3d(" + xpos + "," + ypos + "px,0";
//     transform: translate3d(0px, 10ppx, 0)
}
