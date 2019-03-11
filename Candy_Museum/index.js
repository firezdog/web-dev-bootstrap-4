const navbar = document.getElementById('navbar');
const main = document.getElementById('main');

// the alternative to using the global context would be to create a context with a function that returns a function (as in "debounce") -- probably a good exercise, but given the scope of this script it seems superfluous.
let timeout;

window.addEventListener('scroll', function() {
  navbar.classList.add('scrolled');
  if (timeout) { clearTimeout(timeout); }
  timeout = setTimeout(function() {
    navbar.classList.remove('scrolled');
  },400)
});