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
// Class concepts
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    descripe() {
        console.log(`Department is ${this.name}`);
        console.log(`Readonly ${this.id}`);
        // this.id = 4;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    get fetchMostRecentReport() {
        if (!this.employees) {
            throw new Error("No employees");
        }
        return this.employees[this.employees.length - 1];
    }
    set fetchMostRecentReport(value) {
        if (!value) {
            throw new Error("Report cannot be inserted");
        }
        this.addEmployee(value);
    }
    static getName(value) {
        return {
            name: value
        };
    }
    printEmployee() {
        console.log("Employee");
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const department = new Department("CSE", 2);
console.log(department);
department.descripe();
department.addEmployee("pradeep");
department.addEmployee("jai");
department.addEmployee("sami");
department.printEmployee();
// department.employees[2] = "Guru"
console.log(department.fetchMostRecentReport); // getter
department.fetchMostRecentReport = "leela"; // setter
department.printEmployee();
console.log(Department.getName("pradeep")); // Static access
let leelaPerson = {
    name: "leela",
    age: 27,
    print(pharse) {
        console.log(`${pharse} Hello ${this.name}`);
    },
    // adress : 'svsvsvsv'
};
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello(pharse) {
        console.log(`${pharse} and ${this.name}`);
    }
    greet() {
        console.log(`Hai greeting...`);
    }
}
let person1 = new User("Pradeep", 28);
// Generic Concepts
function merge(obja, objb) {
    return Object.assign(obja, objb);
}
const data = merge({ name: "pradeep" }, { age: 27 });
console.log(data.age);
// Another Example of Generic
function merge1(obja, objb) {
    return Object.assign(obja, objb);
}
const data1 = merge1({ name: "pradeep" }, { age: 27 });
console.log(data1.age);
// Key of Generic concepts
function extractFromObject(obj, key) {
    return obj[key];
}
console.log(extractFromObject({ name: 'pradeep', age: 28 }, 'age'));
// Another for class 
class Student {
    constructor() {
        this.items = [];
    }
    pushItems(item) {
        this.items.push(item);
    }
    getItems() {
        console.log(this.items);
    }
}
let student = new Student();
student.pushItems("pradeep");
student.pushItems("jai");
student.getItems();
let student1 = new Student();
student1.pushItems(1);
student1.pushItems(2);
student1.getItems();
//# sourceMappingURL=main.js.map