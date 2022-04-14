const slider = () => {
    const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.reviews__slide');

    let index = 0;

    const activeSlide = (n) => {
        slides.forEach(slide => {
            slide.classList.remove('reviews__slide_active');
        })
        slides[n].classList.add('reviews__slide_active');
    };

    const nextSlide = () => {
        if (index === slides.length - 1) {
            index = 0;
            activeSlide(index);
        } else {
            index++;
            activeSlide(index);
        }
    };

    const prevSlide = () => {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
        } else {
            index--;
            activeSlide(index);
        }
    };

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
};

export default slider;