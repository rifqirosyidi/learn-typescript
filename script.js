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
// ARRAY
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
// OBJECTS
var country = {
    name: 'Indonesia',
    continent: 'Asia',
    independence: 'August 17, 1945'
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
// 
