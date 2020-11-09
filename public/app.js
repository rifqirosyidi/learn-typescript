import { Invoice } from './classes/Invoice.js';
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
