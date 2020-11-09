import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('Mario', 'Run in game', 340);
docTwo = new Invoice('Two Inv', 'Inv by Two', 340);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: 'Jieg',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
console.log(me);
const greetMe = (person) => {
    console.log(`Hello ${person.name}`);
};
greetMe(me);
// Exclamation make sure that as a developer we know that tag is actually exist
const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href)
// }
console.log(anchor.href);
const invOne = new Invoice('Rifqi', 'Work', 200);
const invTwo = new Invoice('Some', 'Dev', 300);
// Cool
let listInvoice = [];
listInvoice.push(invOne);
listInvoice.push(invTwo);
console.log(listInvoice);
listInvoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// FORM
const form = document.querySelector('form');
// console.log(form.children)
// input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
