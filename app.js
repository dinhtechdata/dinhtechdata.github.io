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

// TOC NAVIGATION
// document.addEventListener("DOMContentLoaded", function () {
//   const headings = document.querySelectorAll(".heading");
//   let currentBoldElement = null;
//
//   headings.forEach((heading) => {
//     heading.addEventListener("click", function () {
//       if (currentBoldElement) {
//         currentBoldElement.classList.remove("bold");
//       }
//
//       this.classList.add("bold");
//       currentBoldElement = this;
//     });
//   });
// });

// SCROLLING TOC
// Get TOC links
const tocLinks = document.querySelectorAll('.TOC a');

// Get all sections
const sections = document.querySelectorAll('div[id]');

// Track active section
let activeSection;

// Scroll handler
window.addEventListener('scroll', () => {

  // Get current scroll position
  const scrollPos = window.scrollY;

  // Find active section
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
      activeSection = section;
    }
  });

  // Bold active TOC link
  const activeLink = document.querySelector(`.TOC a[href="#${activeSection.id}"]`);
  tocLinks.forEach(link => link.classList.remove('bold'));
  activeLink.classList.add('bold');

});

// Click handler
tocLinks.forEach(link => {

  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });

    tocLinks.forEach(link => link.classList.remove('bold'));
    link.classList.add('bold');

  });

});