const pageUp = () => {
    const pageUp = document.querySelector('.pageup');

    function trackScroll() {
        const scrolled = window.pageYOffset; //прокрученная часть
        const coords = document.documentElement.clientHeight; //видимая часть

        if (scrolled > coords) {
            pageUp.classList.add('pageup__show');
        }
        if (scrolled < coords) {
            pageUp.classList.remove('pageup__show');
        }
    }

    function backToTop() {
        const scrolled = window.pageYOffset; //прокрученная часть
        const scrollStep = scrolled / 50;
        if (scrolled > 0) {
            window.scrollBy(0, -(scrollStep)); //Прокручивает документ на указанные величины.
            setTimeout(backToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    pageUp.addEventListener('click', backToTop);

};

export default pageUp;