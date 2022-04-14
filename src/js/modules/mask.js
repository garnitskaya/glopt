const mask = () => {
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
};

export default mask;