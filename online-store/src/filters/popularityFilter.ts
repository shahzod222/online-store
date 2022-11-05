import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let popularBtn = document.getElementById('popular-btn') as HTMLInputElement;
if (!localStorage.popular) localStorage.setItem('popular', '');

popularBtn.addEventListener('click', () => {
    if (popularBtn.checked) {
        showCards(sortByType('popularity', popularBtn.value, true));
        localStorage.popular = 'Yes';
    } else {
        showCards(sortByType('popularity', popularBtn.value, false));
        localStorage.popular = 'No';
    }
});
