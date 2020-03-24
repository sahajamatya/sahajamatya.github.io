const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselButton--right');
const prevButton = document.querySelector('.carouselButton--left');
const dotsNavs = document.querySelector('.carouselNav');
const dots = Array.from(dotsNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}
//when click left, slides left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
});

//when click right, slides right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});

//when click nav indicators, move to that slide