import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let colors = document.getElementsByName('car-color') as NodeListOf<HTMLInputElement>;
if (!localStorage.color) localStorage.setItem('color', '');

colors.forEach((el: HTMLInputElement) => {
    el.addEventListener('click', () => {
        if (el.checked) {
            showCards(sortByType('color', el.value, true));
            localStorage.color += `${el.value} `;
        } else {
            showCards(sortByType('color', el.value, false));
            localStorage.color = localStorage.color.replace(el.value, '');
        }
    });
});
