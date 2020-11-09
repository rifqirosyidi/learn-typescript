// ===== INTRODUCTION =====
const characters = 'Universe'
console.log(characters)
const inputs = document.querySelectorAll('input')
console.log(inputs)
inputs.forEach(i => console.log(i))

// ===== DATA TYPES =====
let mario_char = 'Mario'
let mario_age = 30
let mario_isFemale = false

// reassign wont work caused by different assintment of datatype
// mario_age = "Twenty" 

mario_char = "Luigi"
mario_age = 20
mario_isFemale = true

const findCircleDiameter = (d: number) => {
    return d * Math.PI
}

console.log(findCircleDiameter(2))

// ARRAY
let words = ['it', 'do', 'be', 'like', 'this']
words.push('last')

// cannot push different datatype
// words.push(3) 

let numbers = [1, 2, 3, 4]
numbers.push(5)

// cannot push different datatype
// numbers.push('six')

// mixed array
let mixed = [1, 'two', 3, 'four', 'five']
mixed.push(6)
mixed.push('seven')
mixed[0] = 'zero'

// OBJECTS
let country = {
    name: 'Indonesia',
    continent: 'Asia',
    independence: 'August 17, 1945',
}

// country.independence = 17
country.continent = 'America'

// you cant add additional properties like:

// country.president = ['Soekarnoe', 'Soehartoe']
// country = {
//     name: 'Indonesia',
//     continent: 'Asia',
//     independence: 'August 17, 1945',
//     president = ['Soekarnoe', 'Soehartoe']
// }

console.log(country)

// 