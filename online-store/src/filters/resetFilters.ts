let resetFilters = document.querySelector('.reset-filters') as HTMLButtonElement;
let resetPage = document.querySelector('.reset-page') as HTMLButtonElement;

resetFilters.addEventListener('click', () => {
    let cartFilters = localStorage.cart;
    let sortFilters = localStorage.sort;
    localStorage.clear();
    localStorage.setItem('cart', cartFilters);
    localStorage.setItem('sort', sortFilters);
    location.reload();
});

resetPage.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});
