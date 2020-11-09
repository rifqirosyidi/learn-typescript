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
