import burger from './modules/burger';
import mask from './modules/mask';
import modal from './modules/modal';
import pageUp from './modules/pageUp';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    burger();
    mask();
    slider();
    modal();
    pageUp();
    forms();
});