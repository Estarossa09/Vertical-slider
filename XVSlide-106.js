const sliderCont = document.querySelector('.slider-container');
const slideR = document.querySelector('.right-slide');
const slideL = document.querySelector('.left-slide');
const upB = document.querySelector('.up-button');
const downB = document.querySelector('.down-button');
const slidesLength = slideR.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideL.style.top = `-${(slidesLength - 1) * 100}vh`;

upB.addEventListener('click', () => changeSlide('up'));
downB.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderCont.clientHeight
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    };

    slideR.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideL.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};