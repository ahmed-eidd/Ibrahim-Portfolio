const scroll = new SmoothScroll('a[href*="#"]');

const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
window.addEventListener('scroll', () => {
  logo.classList.toggle('sticky-logo', window.scrollY > 0);
  nav.classList.toggle('sticky', window.scrollY > 0);
});
logo.classList.toggle('sticky-logo', window.pageYOffset > 0);
nav.classList.toggle('sticky', window.pageYOffset > 0);


window.onclick = () => {
 console.log(window.pageYOffset)
}
 
// const navList = document.querySelector('.nav__list')
// const navLinks = document.querySelectorAll('.nav__items');

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener('click', () => {
//     var current = document.getElementsByClassName('active')
//     current[0].className - current[0].className.replace(' active', '')
//     this.classList += 'active';
//   });
// }

// // Add active class to the current button (highlight it)
// // var header = document.getElementById("myDIV");
// // var btns = header.getElementsByClassName("btn");
// // for (var i = 0; i < btns.length; i++) {
// //   btns[i].addEventListener("click", function() {
// //   var current = document.getElementsByClassName("active");
// //   current[0].className = current[0].className.replace(" active", "");
// //   this.className += " active";
// //   });
// // }
