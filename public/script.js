"use strict";
// ===== INTRODUCTION =====
var characters = 'Universe';
console.log(characters);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (i) { return console.log(i); });
// ===== DATA TYPES =====
var mario_char = 'Mario';
var mario_age = 30;
var mario_isFemale = false;
// reassign wont work caused by different assintment of datatype
// mario_age = "Twenty" 
mario_char = "Luigi";
mario_age = 20;
mario_isFemale = true;
var findCircleDiameter = function (d) {
    return d * Math.PI;
};
console.log(findCircleDiameter(2));
// ===== ARRAY ======
var words = ['it', 'do', 'be', 'like', 'this'];
words.push('last');
// cannot push different datatype
// words.push(3) 
var numbers = [1, 2, 3, 4];
numbers.push(5);
// cannot push different datatype
// numbers.push('six')
// mixed array
var mixed = [1, 'two', 3, 'four', 'five'];
mixed.push(6);
mixed.push('seven');
mixed[0] = 'zero';
// ===== objectS =====
var country = {
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
var person;
var age;
var isLoggedIn;
person = 'Tim',
    age = 12;
isLoggedIn = false;
console.log(person, age, isLoggedIn);
// ===== EXPLICIT ARR =====
var persons = [];
persons.push('One');
console.log(persons);
//  ===== UNION TYPES ======
var mixed_arr = [];
mixed_arr.push('One');
mixed_arr.push(2);
console.log(mixed_arr);
var user_id;
user_id = 123;
user_id = '988';
// ===== EXPLICIT objectS =====
var some_object;
some_object = {
    name: 'Named object',
    age: 23
};
// assign prop datatype
var oth_object;
oth_object = {
    name: 'Oth',
    age: 12
};
// ===== DYNAMIC / ANY TYPE =====
var umur;
umur = true;
console.log(umur);
umur = 12;
console.log(umur);
umur = 'Twenty';
console.log(umur);
// arr any
var any_arr = [];
any_arr.push(1);
any_arr.push('Two');
any_arr.push(true);
any_arr.push(false);
console.log(any_arr);
// obj any
var obj_any;
obj_any = { name: 'My', age: 12 };
console.log(obj_any);
