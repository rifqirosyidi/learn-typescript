"use strict";
// Exclamation make sure that as a developer we know that tag is actually exist
var anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor.href)
// }
console.log(anchor.href);
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Rifqi', 'Work', 200);
var invTwo = new Invoice('Some', 'Dev', 300);
// Cool
var listInvoice = [];
listInvoice.push(invOne);
listInvoice.push(invTwo);
console.log(listInvoice);
// FORM
var form = document.querySelector('form');
// console.log(form.children)
// input
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
