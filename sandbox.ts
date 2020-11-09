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

