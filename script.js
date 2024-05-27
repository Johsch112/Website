const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hiddenfromright');
hiddenElements.forEach((el) => observer.observe(el))


window.addEventListener('scroll', function() {
    var parallax = document.querySelector('.parallax');
    var scrollPosition = window.pageYOffset;
  
    parallax.style.backgroundPositionY = scrollPosition * 0 + 'px';
  });
