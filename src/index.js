import './normalize.css';
import './style.css';

import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createAboutPage } from './about';

function displayContent() {
    const body = document.querySelector('html');
    const display = document.querySelector('#content');
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');

    let added = false;

    createHomePage(display);

    menuBtn.addEventListener('click', () => {
        if (added) {
          body.classList.remove('body');
          added = false;
        }
        display.textContent = '';

        createMenuPage(display);
    });

    aboutBtn.addEventListener('click', () => {
        if (!added) {
            body.classList.add('body');
            added = true;
        }
        display.textContent = '';

        createAboutPage(display);
    });

    homeBtn.addEventListener('click', () => {
        if (added) {
          body.classList.remove('body');
          added = false;
        }
        display.textContent = '';

        createHomePage(display);
    });

}

displayContent();

console.log('Hello World');