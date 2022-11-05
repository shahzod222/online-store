let noUiSlider = require('nouislider');
let wNumb = require('wnumb');
import 'nouislider/dist/nouislider.css';
import { showCards } from '../cards/cards';
import { sortByType } from '../functions/sortByValue';

let quantitySlider = document.getElementById('quantity-slider') as HTMLDivElement;
let priceSlider = document.getElementById('price-slider') as HTMLDivElement;

if (!localStorage.quantity) {
    localStorage.setItem('quantity', '1 5');
}
if (!localStorage.price) {
    localStorage.setItem('price', '55000 140000');
}

noUiSlider.create(quantitySlider, {
    start: [Number(localStorage.quantity.split(' ')[0]), Number(localStorage.quantity.split(' ')[1])],
    connect: true,
    step: 1,
    tooltips: true,
    range: {
        min: 1,
        max: 5,
    },
    pips: {
        mode: 'positions',
        stepped: true,
        values: [0, 25, 50, 75, 100],
        density: 3,
    },
});

noUiSlider.create(priceSlider, {
    start: [Number(localStorage.price.split(' ')[0]), Number(localStorage.price.split(' ')[1])],
    connect: true,
    step: 5000,
    tooltips: true,
    range: {
        min: 55000,
        max: 140000,
    },
    pips: {
        mode: 'positions',
        stepped: true,
        values: [0, 50, 100],
        density: 3,
        format: wNumb({
            decimals: 0,
            prefix: '$',
        }),
    },
});

quantitySlider.addEventListener('click', () => {
    let tooltips = document.getElementsByClassName('noUi-tooltip');
    let quanityValues = [tooltips[0].innerHTML, tooltips[1].innerHTML];
    showCards(sortByType('quantity', quanityValues, true));
    localStorage.quantity = `${tooltips[0].innerHTML} ${tooltips[1].innerHTML}`;
});

priceSlider.addEventListener('click', () => {
    let tooltips = document.getElementsByClassName('noUi-tooltip');
    let priceValues = [tooltips[2].innerHTML, tooltips[3].innerHTML];
    showCards(sortByType('price', priceValues, true));
    localStorage.price = `${tooltips[2].innerHTML} ${tooltips[3].innerHTML}`;
});
