"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));   // Type: string
// console.log(typeof(strObj));    // Type: object

console.dir([1, 2, 3]);

// Пример 1
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

// Правильно создание объекта с наследованием от прототипа
const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// Устаревший способ
// john.__proto__ = soldier;

// Способ "на ходу"
// Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();

