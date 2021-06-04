const preloader = document.querySelector(".preloader")
window.addEventListener("load", () => {
preloader.classList.add('vanish');
// AOS Initialization
AOS.init();

});
// const menuBtn = document.querySelector('.menu-btn');
// const menuOpen = document.querySelector('.menu-open');
// const mo = document.querySelectorAll('.mo');
// let Open = false;
// menuBtn.addEventListener('click', () => {
//   if(!Open) {
//     Open = true;
//     menuOpen.style.display = "flex";
//     menuBtn.classList.add('open');
//     menuOpen.classList.add('opened');
//     let delay = 0;
//     mo.forEach(function (e){
//         e.classList.add('mo-slide');
//         e.style.transitionDelay = delay+"ms";
//         delay = delay+150;
//     });
//   } else {
//     Open = false;
//     menuOpen.style.display = "none";
//     menuBtn.classList.remove('open');
//     menuOpen.classList.remove('opened');
//     mo.forEach(function (e){
//       e.classList.remove('mo-slide')
//   });
//   }
// });

// LightBox Initialize
const lightbox = GLightbox({
  selector: ".glightbox"
});


// isotope Layout
var grid = document.querySelector('.gallery-container');
var iso = new Isotope( grid, {
  // options...
  itemSelector: '.wrapper',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Isotope after each image loads
  iso.layout();
});


var filtersElem = document.querySelector('.filter-options');
filtersElem.addEventListener( 'click', function( event ) {
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});


//Intersection API
const imgList = document.querySelectorAll("img");
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}
const myObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      iso.layout();
    }
  })
},options)
imgList.forEach(img =>{
  myObserver.observe(img)
});

