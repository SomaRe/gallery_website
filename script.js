
window.addEventListener("load", () => {
  // AOS Initialization
  AOS.init();
});

//Intersection API
// const imgList = document.querySelectorAll("img");
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0
// }
// const myObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry =>{
//     if(entry.isIntersecting){
//       iso.layout();
//     }
//   })
// },options)
// imgList.forEach(img =>{
//   myObserver.observe(img)
// });