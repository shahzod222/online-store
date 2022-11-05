import { showCards } from '../cards/cards';
import { sortByType } from './sortByValue';

export function checkLS() {
    checkType();
    checkColor();
    checkPopular();
    checkSearch();
    checkSort();
    checkRanges();
    checkCart();
}

function checkType() {
    if (localStorage.types) {
        let arr = localStorage.types.trim().split(' ');
        let types = document.getElementsByName('car-type') as NodeListOf<HTMLInputElement>;

        types.forEach((el) => {
            for (let i = 0; i < arr.length; i++) {
                if (el.value == arr[i]) {
                    el.checked = true;
                    showCards(sortByType('type', el.value, true));
                }
            }
        });
    }
}

function checkColor() {
    if (localStorage.color) {
        let arr = localStorage.color.trim().split(' ');
        let colors = document.getElementsByName('car-color') as NodeListOf<HTMLInputElement>;

        colors.forEach((el) => {
            for (let i = 0; i < arr.length; i++) {
                if (el.value == arr[i]) {
                    el.checked = true;
                    showCards(sortByType('color', el.value, true));
                }
            }
        });
    }
}

function checkPopular() {
    if (localStorage.popular == 'Yes') {
        let popularBtn = document.getElementById('popular-btn') as HTMLInputElement;
        showCards(sortByType('popularity', popularBtn.value, true));
        popularBtn.checked = true;
    }
}

function checkSearch() {
    if (localStorage.search) {
        let search = document.querySelector('.search') as HTMLInputElement;
        search.value = localStorage.search;
        showCards(sortByType('search', localStorage.search, true));
    }
}

function checkSort() {
    if (localStorage.sort) {
        let sort = document.querySelector('.sort') as HTMLInputElement;
        sort.value = localStorage.sort;
        showCards(sortByType('sort', localStorage.sort, true));
    }
}

function checkRanges() {
    showCards(sortByType('quantity', [localStorage.quantity.split(' ')[0], localStorage.quantity.split(' ')[1]], true));
    showCards(sortByType('price', [localStorage.price.split(' ')[0], localStorage.price.split(' ')[1]], true));
}
function checkCart() {
    let cartCount = document.querySelector('.cart-count') as HTMLParagraphElement;
    if (localStorage.cart.trim().length !== 0) {
        let selectedCards = localStorage.cart.trim().split(' ');
        let cartBtns = document.querySelectorAll('.add-to-cart') as NodeListOf<HTMLButtonElement>;

        cartBtns.forEach((el) => {
            for (let j = 0; j < selectedCards.length; j++) {
                if (el.name == selectedCards[j]) {
                    el.className = 'add-to-cart active-btn';
                }
            }
        });
        cartCount.innerHTML = String(selectedCards.length);
    } else {
        cartCount.innerHTML = '0';
    }
}
