"use strict";

function inBetween(a,b) {
    return value => value >= a && value <= b;
}

function inArray(array) {
    return value => array.includes(value);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inArray([1, 2, 10])) );
console.log( arr.filter(inBetween(3, 6)) );