const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelectorAll('textarea'),
        modal = document.querySelector('.modal');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const clearInputs = () => {
        inputs.forEach(item => item.value = '');
        textarea.forEach(item => item.value = '');
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.insertAdjacentElement('beforeend', statusMessage);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.append(textMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();

                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                    setTimeout(() => {
                        modal.classList.remove('modal__active');
                        document.body.style.overflow = '';
                    }, 10000);
                })
        })
    })
};

export default forms;