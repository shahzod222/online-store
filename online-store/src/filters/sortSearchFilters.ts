import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let search = document.querySelector('.search') as HTMLInputElement;
let sort = document.querySelector('.sort') as HTMLSelectElement;

if (!localStorage.sort) localStorage.setItem('sort', '');
if (!localStorage.search) localStorage.setItem('search', '');

search.addEventListener('input', () => {
    showCards(sortByType('search', search.value, true));
    localStorage.search = search.value;
});

sort.addEventListener('change', () => {
    showCards(sortByType('sort', sort.value, true));
    localStorage.sort = sort.value;
});
