import { allCars } from '../types/cars';
import { Car } from '../types/cars';

let carTypes = new Array();
let colorFilters = new Array();
let popularityFilter: boolean;
let quanityValues = [1, 5];
let priceValues = [55000, 140000];
let searchFilter: string;
let sortFilter: string = 'sortNameAZ';

enum sortTypes {
    name = 'sortNameAZ',
    nameRvr = 'sortNameZA',
    price = 'sortPriceIncr',
    priceRvr = 'sortPriceDecr',
    quantity = 'sortQuantityIncr',
    quantityRvr = 'sortQuantityDecr',
}

export function sortByType(type: string, value: string | string[], showHtml: boolean): Car[] {
    let sortedArr = allCars.slice();

    switch (type) {
        case 'type':
            if (showHtml) carTypes.push(value);
            else carTypes.splice(carTypes.indexOf(value), 1);
            break;
        case 'color':
            if (showHtml) colorFilters.push(value);
            else colorFilters.splice(colorFilters.indexOf(value), 1);
            break;
        case 'popularity':
            if (showHtml) popularityFilter = true;
            else popularityFilter = false;
            break;
        case 'quantity':
            quanityValues[0] = Number(value[0]);
            quanityValues[1] = Number(value[1]);
            break;
        case 'price':
            priceValues[0] = Number(value[0]);
            priceValues[1] = Number(value[1]);
            break;
        case 'search':
            searchFilter = String(value);
            break;
        case 'sort':
            sortFilter = String(value);
            break;
    }

    if (carTypes.length !== 3 && carTypes.length !== 0) {
        sortedArr = sortedArr.filter((car) => carTypes.includes(car.type));
    }

    if (colorFilters.length !== 6 && colorFilters.length !== 0) {
        sortedArr = sortedArr.filter((car) => colorFilters.includes(car.color));
    }

    if (popularityFilter) {
        sortedArr = sortedArr.filter((car) => car.popularity == 'Yes');
    }

    sortedArr = sortedArr.filter(
        (car) => car.quantityInStock >= quanityValues[0] && car.quantityInStock <= quanityValues[1]
    );
    sortedArr = sortedArr.filter((car) => car.price >= priceValues[0] && car.price <= priceValues[1]);

    if (searchFilter) {
        sortedArr = sortedArr.filter((car) =>
            (car.brand + ' ' + car.model).toLowerCase().includes(searchFilter.toLowerCase())
        );
    }

    switch (sortFilter) {
        case sortTypes.name:
            sortedArr = sortByName(sortedArr, 'model');
            break;
        case sortTypes.nameRvr:
            sortedArr = sortByName(sortedArr, 'model').reverse();
            break;
        case sortTypes.price:
            sortedArr = sortedArr.sort((a, b) => a.price - b.price);
            break;
        case sortTypes.priceRvr:
            sortedArr = sortedArr.sort((a, b) => a.price - b.price).reverse();
            break;
        case sortTypes.quantity:
            sortedArr = sortedArr.sort((a, b) => a.quantityInStock - b.quantityInStock);
            break;
        case sortTypes.quantityRvr:
            sortedArr = sortedArr.sort((a, b) => a.quantityInStock - b.quantityInStock).reverse();
            break;
    }

    return sortedArr;
}

export function sortByName(array: Car[], value: string): Car[] {
    let arr = array.sort(function (a, b) {
        if (a[value as keyof typeof a] < b[value as keyof typeof b]) {
            return -1;
        }
        if (a[value as keyof typeof a] > b[value as keyof typeof b]) {
            return 1;
        }
        return 0;
    });
    return arr;
}
