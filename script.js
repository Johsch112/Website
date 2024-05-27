window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax');
    var scrollPosition = window.pageYOffset;
  
    parallax.style.backgroundPositionY = scrollPosition * 0 + 'px';
  });