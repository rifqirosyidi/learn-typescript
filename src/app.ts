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

import { Invoice } from './classes/Invoice.js'

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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})


