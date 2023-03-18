document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    const span = marquee.querySelector('span');
    const spanWidth = span.offsetWidth;
  
    marquee.style.width = spanWidth * 2 + 'px';
  });