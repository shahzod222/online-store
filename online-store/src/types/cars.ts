import { ICar } from './types';
import './cars.css';

export class Car implements ICar {
    model: string;
    brand: string;
    price: number;
    popularity: string;
    quantityInStock: number;
    cssClass: string;
    color: string;
    type: string;
    constructor(
        model: string,
        price: number,
        popularity: string,
        quantityInStock: number,
        cssClass: string,
        color: string,
        type: string
    ) {
        this.model = model;
        this.brand = 'BMW';
        this.price = price;
        this.popularity = popularity;
        this.quantityInStock = quantityInStock;
        this.cssClass = cssClass;
        this.color = color;
        this.type = type;
    }
}

export class Cart {
    putToCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
        countEl.innerHTML = `${Number(countEl.innerHTML) + 1}`;
        el.innerHTML = 'Added To Cart';
    }
    removeFromCart(el: HTMLButtonElement, countEl: HTMLParagraphElement) {
        countEl.innerHTML = `${Number(countEl.innerHTML) - 1}`;
        el.innerHTML = 'Add To Cart';
    }
}

let car1: Car = new Car('M5', 105000, 'Yes', 3, 'm5', 'Red', 'Sedan');
let car2: Car = new Car('M8', 130000, 'No', 4, 'm8', 'Red', 'Sedan');
let car3: Car = new Car('X4 M', 75000, 'No', 1, 'x4m', 'Yellow', 'SUV');
let car4: Car = new Car('X6', 70000, 'No', 1, 'x6', 'Gray', 'SUV');
let car5: Car = new Car('X7', 140000, 'Yes', 5, 'x7', 'Black', 'SUV');
let car6: Car = new Car('5 Series', 55000, 'No', 3, 's5', 'Blue', 'Sedan');
let car7: Car = new Car('8 Series', 90000, 'Yes', 2, 's8', 'Blue', 'Sedan');
let car8: Car = new Car('I4', 60000, 'No', 4, 'i4', 'Gray', 'Electric-Car');
let car9: Car = new Car('I7', 120000, 'Yes', 1, 'i7', 'White', 'Electric-Car');
let car10: Car = new Car('IX', 90000, 'Yes', 4, 'ix', 'White', 'Electric-Car');
let car11: Car = new Car('X5 M', 105000, 'No', 3, 'x5m', 'Blue', 'SUV');
let car12: Car = new Car('Z4', 55000, 'No', 2, 'z4', 'White', 'Sedan');
export let allCars: Car[] = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12];
