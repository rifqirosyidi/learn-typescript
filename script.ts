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

// ===== ARRAY ======
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

// ===== OBJECTS =====
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

// ===== EXPLICIT TYPES =====
let person: String
let age: Number
let isLoggedIn: Boolean

person = 'Tim',
age = 12
isLoggedIn = false

console.log(person, age, isLoggedIn)

// ===== EXPLICIT ARR =====
let persons: String[] = []
persons.push('One')

console.log(persons)

//  ===== UNION TYPES ======
let mixed_arr: (String|Number)[] = []
mixed_arr.push('One')
mixed_arr.push(2)

console.log(mixed_arr)

let user_id: String|Number
user_id = 123
user_id = '988'

// ===== EXPLICIT OBJECTS =====
let some_object: Object
some_object = {
    name: 'Named Object',
    age: 23
}

// assign prop datatype
let oth_object: {
    name: String,
    age: Number
}

oth_object = {
    name: 'Oth',
    age: 12
}