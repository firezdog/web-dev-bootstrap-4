const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(e) {
  const scrollTop = e.target.scrollingElement.scrollTop;
  if (scrollTop > 0) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});