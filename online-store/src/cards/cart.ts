export function cart(el: HTMLButtonElement) {
    let cartCount = document.querySelector('.cart-count') as HTMLParagraphElement;
    el.addEventListener('click', () => {
        el.classList.toggle('active-btn');
        if (el.className == 'add-to-cart active-btn') {
            localStorage.cart += `${el.name} `;
            cartCount.innerHTML = String(Number(cartCount.innerHTML) + 1);
        } else {
            localStorage.cart = localStorage.cart.replace(el.name, '');
            cartCount.innerHTML = String(Number(cartCount.innerHTML) - 1);
        }
    });
}
