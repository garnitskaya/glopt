window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

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
    //$('input[name=phone]').mask("+3(999) 999-99-99");

    const numInput = document.querySelectorAll('input[name=phone]');

    numInput.forEach(item => {
        item.addEventListener('focus', () => {
            if (!/^\+\d*$/.test(numInput.value)) {
                item.value = '+380';
            }
        });
        item.addEventListener('keypress', (e) => {
            if (!/\d/.test(e.key))
                e.preventDefault();
        });
    })

    //Slider
    const prev = document.getElementById('btn-prev'),
        next = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.reviews__slide'),
        dots = document.querySelectorAll('.dot');

    let index = 0;

    const activeSlide = (n) => {
        for (slide of slides) {
            slide.classList.remove('reviews__slide_active');
        }
        slides[n].classList.add('reviews__slide_active');
    };

    const prepareCurrentSlide = () => {
        activeSlide(index);
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


    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    //Modal

    const btns = document.querySelectorAll('.header__btn'),
        modal = document.querySelector('.modal'),
        closeBtn = document.querySelector('.modal__close');

    function openModal() {
        modal.classList.toggle('modal__active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.toggle('modal__active');
        document.body.style.overflow = '';
    }

    btns.forEach(btn => {
        btn.addEventListener('click', openModal);
    })

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('modal__active')) {
            closeModal();
        }
    })

    //Page up

    const pageUp = document.querySelector('.pageup');

    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            pageUp.classList.add('pageup__show');
        }
        if (scrolled < coords) {
            pageUp.classList.remove('pageup__show');
        }
    }

    function backToTop() {
        const scrolled = window.pageYOffset;
        const scrollStep = scrolled / 50;
        if (scrolled > 0) {
            window.scrollBy(0, -(scrollStep));
            setTimeout(backToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    pageUp.addEventListener('click', backToTop);
})