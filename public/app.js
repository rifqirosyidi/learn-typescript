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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS 
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let userOne = addUID({ name: 'Rief', age: 20 });
console.log(userOne);
// console.log(userOne.name) NOT WORK
// by default you cant access userOne.name, or uerOne.age because its not defined it just obj...
// to handle this use generics below
const genUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let userTwo = genUID({ name: 'Rief', age: 20 });
console.log(userTwo.name);
const dataThree = {
    uid: 1,
    res: 'person',
    data: { name: 'Rief ' }
};
const dataFour = {
    uid: 2,
    res: 'cart',
    data: ['laptop', 'smartphone']
};
// ENUMS
var SecondResourceType;
(function (SecondResourceType) {
    SecondResourceType[SecondResourceType["BOOK"] = 0] = "BOOK";
    SecondResourceType[SecondResourceType["MOVIE"] = 1] = "MOVIE";
    SecondResourceType[SecondResourceType["TV"] = 2] = "TV";
    SecondResourceType[SecondResourceType["AUTHOR"] = 3] = "AUTHOR";
    SecondResourceType[SecondResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    SecondResourceType[SecondResourceType["ACTOR"] = 5] = "ACTOR";
})(SecondResourceType || (SecondResourceType = {}));
const dataSix = {
    uid: 2,
    res: SecondResourceType.AUTHOR,
    data: { name: 'Smith' }
};
const dataSeven = {
    uid: 2,
    res: SecondResourceType.AUTHOR,
    data: { name: 'Smith' }
};
const dataEight = {
    uid: 2,
    res: SecondResourceType.MOVIE,
    data: { name: 'The LOTR' }
};
// TUPPLE
let arr = [1, 'sec', true]; // you can modify this arr by
arr[0] = false;
arr[1] = 'twenty';
// or even
arr = [1, 2, 3, 4, 'five', true, false];
// But Tupple You Cant Change Data Type in certain Position
let tup = ['one', false, 3];
// tup[1] = "Two" // This NOT allowed
let student = ['ken', 123];
