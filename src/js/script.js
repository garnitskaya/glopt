//Burger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu'),
        menuItem = document.querySelectorAll('.nav__link'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        });
    });
});


//Mask
$('input[name=phone]').mask("+3(999) 999-99-99");

//Slider
const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.reviews__slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (reviews__slide of slides) {
        reviews__slide.classList.remove('reviews__slide_active');
    }
    slides[n].classList.add('reviews__slide_active');
};


const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};


const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};


const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });

})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);