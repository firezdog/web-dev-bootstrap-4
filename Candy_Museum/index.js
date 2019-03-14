const navbar = document.querySelector('.js-navbar');

window.addEventListener('scroll', function(e) {
  const scrollTop = e.target.scrollingElement.scrollTop;
  if (scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});