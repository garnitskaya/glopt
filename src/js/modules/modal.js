const modal = () => {
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
};

export default modal;