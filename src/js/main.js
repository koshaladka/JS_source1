import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms'

console.log('1');

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    tabs ('.glazing_slider', '.glazing_block', '.glazing_content', 'active', 'flex');
    tabs ('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click', 'flex');
    tabs ('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();
});