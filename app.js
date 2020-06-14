const scroll = new SmoothScroll('a[href*="#"]');

const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo')
window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 0) 
  logo.classList.toggle('sticky-logo', window.scrollY > 0)
})