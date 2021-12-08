"use strict";
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const button = document.querySelector('#button');
const add = (number1, number2) => {
    return number1 + number2;
};
button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
});
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 1] = "AUTHOR";
    ROLES[ROLES["GUEST"] = 2] = "GUEST";
})(ROLES || (ROLES = {}));
// Type declaration for object and array
let person = {
    name: "pradeep",
    age: 28,
    hobbies: ['coding', 'learning'],
    tuples: [2, 'admin'],
    role: ROLES.ADMIN
};
console.log(person.name);
// person.hobbies.push(2)
// person.tuples = ['hr', 2] 
if (person.role === ROLES.ADMIN) {
    console.log('use is admin');
}
// Union concepts
function combine(inp1, inp2) {
    let result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
let result = combine(2, 4);
console.log(result);
// Function declaration
function addNumber(inp1, inp2) {
    return inp1 + inp2;
}
let combineValue;
combineValue = addNumber;
console.log(combineValue(1, 2));
