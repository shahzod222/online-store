import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';
import './typeFilters.css';
import './colorFilters';

let types = document.getElementsByName('car-type') as NodeListOf<HTMLInputElement>;
if (!localStorage.types) localStorage.setItem('types', '');

types.forEach((el: HTMLInputElement) => {
    el.addEventListener('click', () => {
        if (el.checked) {
            showCards(sortByType('type', el.value, true));
            localStorage.types += `${el.value} `;
        } else {
            showCards(sortByType('type', el.value, false));
            localStorage.types = localStorage.types.replace(el.value, '');
        }
    });
});
