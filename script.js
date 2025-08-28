const hamburger = document.getElementById('hamburger');
const fullscreenMenu = document.getElementById('fullscreenMenu');

  hamburger.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('active');
    // animacja hamburgera w krzyżyk
    hamburger.classList.toggle('open');
  });



const track = document.querySelector('.photos-track');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

let position = 0; // aktualne przesunięcie
const slideWidth = 310; // szerokość obrazka + margines (300 + 10px)

rightBtn.addEventListener('click', () => {
  position -= slideWidth;
  if (Math.abs(position) >= track.scrollWidth - track.parentElement.offsetWidth) {
    position = -(track.scrollWidth - track.parentElement.offsetWidth); // zatrzymanie na końcu
  }
  track.style.transform = `translateX(${position}px)`;
});

leftBtn.addEventListener('click', () => {
  position += slideWidth;
  if (position > 0) position = 0; // zatrzymanie na początku
  track.style.transform = `translateX(${position}px)`;
});
