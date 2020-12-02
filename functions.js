"use strict";

// Function Declaration
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(2, 3));
console.log(calc(4, 9));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function Expression
const logger = function() {
    console.log("Hello");
};

logger();

// Стрелочные функции
const calc = (a, b) => {
    console.log('1');
    return a + b;
}