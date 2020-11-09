// Exclamation make sure that as a developer we know that tag is actually exist

const anchor = document.querySelector('a')!

// if (anchor) {
//     console.log(anchor.href)
// }

console.log(anchor.href)


class Invoice {
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a:number) {
        this.client = c
        this.details = d
        this.amount = a
    } 


    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Rifqi', 'Work', 200)
const invTwo = new Invoice('Some', 'Dev', 300)


// Cool
let listInvoice: Invoice[] = []
listInvoice.push(invOne)
listInvoice.push(invTwo)

console.log(listInvoice)

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


