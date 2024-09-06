let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const intervalTime = 5000; // Time in milliseconds

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Autoplay function
function startAutoplay() {
    setInterval(() => {
        moveSlide(1); // Move to the next slide
    }, intervalTime);
}

// Start autoplay when the page loads
window.onload = startAutoplay;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', () => clearInterval(autoplay));
carousel.addEventListener('mouseout', startAutoplay);

let autoplay = setInterval(() => {
    moveSlide(1);
}, intervalTime);