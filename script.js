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

document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll(".section"));
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            // Pokazuje sekcję, gdy jest w zasięgu
            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            } 
            // Chowa sekcję, jeśli z powrotem wrócisz na górę strony
            else if (window.scrollY === 0) {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll);
});




document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");
    const observedSections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        const secondSection = observedSections[1];
        if (!secondSection) return;

        const secondSectionTop = secondSection.getBoundingClientRect().top;

        if (secondSectionTop < window.innerHeight / 2) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


