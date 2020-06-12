const scroll = new SmoothScroll('a[href*="#"]');

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', window.scrollY > 0) 
})