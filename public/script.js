"use strict";
// ===== INTRODUCTION =====
const characters = 'Universe';
console.log(characters);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(i => console.log(i));
// ===== DATA TYPES =====
let mario_char = 'Mario';
let mario_age = 30;
let mario_isFemale = false;
// reassign wont work caused by different assintment of datatype
// mario_age = "Twenty" 
mario_char = "Luigi";
mario_age = 20;
mario_isFemale = true;
const findCircleDiameter = (d) => {
    return d * Math.PI;
};
console.log(findCircleDiameter(2));
// ===== ARRAY ======
let words = ['it', 'do', 'be', 'like', 'this'];
words.push('last');
// cannot push different datatype
// words.push(3) 
let numbers = [1, 2, 3, 4];
numbers.push(5);
// cannot push different datatype
// numbers.push('six')
// mixed array
let mixed = [1, 'two', 3, 'four', 'five'];
mixed.push(6);
mixed.push('seven');
mixed[0] = 'zero';
// ===== objectS =====
let country = {
    name: 'Indonesia',
    continent: 'Asia',
    independence: 'August 17, 1945',
};
// country.independence = 17
country.continent = 'America';
// you cant add additional properties like:
// country.president = ['Soekarnoe', 'Soehartoe']
// country = {
//     name: 'Indonesia',
//     continent: 'Asia',
//     independence: 'August 17, 1945',
//     president = ['Soekarnoe', 'Soehartoe']
// }
console.log(country);
// ===== EXPLICIT TYPES =====
let person;
let age;
let isLoggedIn;
person = 'Tim',
    age = 12;
isLoggedIn = false;
console.log(person, age, isLoggedIn);
// ===== EXPLICIT ARR =====
let persons = [];
persons.push('One');
console.log(persons);
//  ===== UNION TYPES ======
let mixed_arr = [];
mixed_arr.push('One');
mixed_arr.push(2);
console.log(mixed_arr);
let user_id;
user_id = 123;
user_id = '988';
// ===== EXPLICIT objectS =====
let some_object;
some_object = {
    name: 'Named object',
    age: 23
};
// assign prop datatype
let oth_object;
oth_object = {
    name: 'Oth',
    age: 12
};
// ===== DYNAMIC / ANY TYPE =====
let umur;
umur = true;
console.log(umur);
umur = 12;
console.log(umur);
umur = 'Twenty';
console.log(umur);
// arr any
let any_arr = [];
any_arr.push(1);
any_arr.push('Two');
any_arr.push(true);
any_arr.push(false);
console.log(any_arr);
// obj any
let obj_any;
obj_any = { name: 'My', age: 12 };
console.log(obj_any);
// ===== FUNCTION =====
let sayHi = () => {
    console.log("Hi There");
};
sayHi();
// define initial var as a function
let sayHello;
sayHello = () => {
    console.log("Works");
};
const addition = (a, b) => {
    console.log(a + b);
};
addition(13, 89);
// optional parameters
const minus = (a, b, c = 'DEFAULT VALUE') => {
    console.log(a - b);
    console.log(c);
};
minus(4, 5);
minus(4, 3, 'Min Opr');
// sayHi = 'New Say Hi'
const multiply = (a, b) => {
    return a * b;
};
// assign the type of return value
let result = multiply(10, 23);
console.log(result);
// More Specific
// (a: ..., b: ...) : ...
const multiplyWithDefineReturnVal = (a, b) => {
    return a * b;
};
let number_result = multiplyWithDefineReturnVal(3, 7);
console.log(number_result);
const showLogs = (uid, item) => {
    console.log(`${item} id's ${uid}`);
};
const saySomething = (user) => {
    console.log(`${user.name} id's ${user.uid}`);
};
// ====== FUNCTION SIGNATURES =====
let sentence;
// exp 1
let greet;
greet = (name, greeting) => {
    console.log(`Good ${greeting} ${name}`);
};
// exp 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// exp 3
let logDetails;
logDetails = (person) => {
    console.log(`${person.name} is ${person.age}`);
};
