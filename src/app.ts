import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplates.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'


let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Mario', 'Run in game', 340) 
docTwo = new Invoice('Two Inv', 'Inv by Two', 340) 

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

// INTERFACES
interface isPerson {
    name: string
    age: number
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = { 
    name: 'Jieg', 
    age: 30,
    speak(text: string) {
        console.log(text)
    },
    spend(amount: number): number {
        return amount
    }
}

console.log(me)

const greetMe = (person: isPerson) => {
    console.log(`Hello ${person.name}`)
}

greetMe(me)



// Exclamation make sure that as a developer we know that tag is actually exist

const anchor = document.querySelector('a')!

// if (anchor) {
//     console.log(anchor.href)
// }

console.log(anchor.href)

const invOne = new Invoice('Rifqi', 'Work', 200)
const invTwo = new Invoice('Some', 'Dev', 300)

// Cool
let listInvoice: Invoice[] = []
listInvoice.push(invOne)
listInvoice.push(invTwo)

console.log(listInvoice)

listInvoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

// FORM
const form = document.querySelector('form') as HTMLFormElement
// console.log(form.children)

// input
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter
    
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})



// GENERICS 
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let userOne = addUID({name: 'Rief', age: 20})

console.log(userOne)
// console.log(userOne.name) NOT WORK

// by default you cant access userOne.name, or uerOne.age because its not defined it just obj...
// to handle this use generics below

const genUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let userTwo = genUID({name: 'Rief', age: 20})

console.log(userTwo.name)


interface Resource<T> {
    uid: number
    res: string
    data: T
}

const dataThree: Resource<object> = {
    uid: 1,
    res: 'person',
    data: { name: 'Rief '}
}

const dataFour: Resource<string[]> = {
    uid: 2,
    res: 'cart',
    data: ['laptop', 'smartphone']
}


// ENUMS

enum SecondResourceType { BOOK, MOVIE, TV, AUTHOR, DIRECTOR, ACTOR }

interface SecondResource<T> {
    uid: number
    res: SecondResourceType
    data: T
}

const dataSix: SecondResource<object> = {
    uid: 2,
    res: SecondResourceType.AUTHOR,
    data: {name: 'Smith'}
}

const dataSeven: SecondResource<object> = {
    uid: 2,
    res: SecondResourceType.AUTHOR,
    data: {name: 'Smith'}
}

const dataEight: SecondResource<object> = {
    uid: 2,
    res: SecondResourceType.MOVIE,
    data: {name: 'The LOTR'}
}
