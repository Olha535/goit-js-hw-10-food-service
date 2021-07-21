import menu from './menu.json';
import itemsTemplate from '../templates/food-card.hbs';

const menuCardEl = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
menuCardEl.insertAdjacentHTML('beforeend', markup);
