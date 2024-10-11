import './normalize.css';
import './style.css';

import { createHomePage } from './home';
import { createMenuPage } from './menu';

const display = document.querySelector('#content');

// createHomePage(display);
createMenuPage(display);

console.log('Hello World');