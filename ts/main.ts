const input1 = document.querySelector('#number1') as HTMLInputElement;
const input2 = document.querySelector('#number2') as HTMLInputElement;
const button = document.querySelector('#button')!

const add = (number1 : number, number2 : number) => {
    return number1 + number2
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value))
})

enum ROLES {
    ADMIN,
    AUTHOR,
    GUEST
}

// Type declaration for object and array
let person : {
    name : string, 
    age : number, 
    hobbies : string[],
    tuples : [number, string]
    role : ROLES.ADMIN
} = {
    name : "pradeep",
    age : 28,
    hobbies : ['coding', 'learning'],
    tuples : [2, 'admin'],
    role : ROLES.ADMIN
}

console.log(person.name)
// person.hobbies.push(2)
// person.tuples = ['hr', 2] 

if (person.role === ROLES.ADMIN) {
    console.log('use is admin')
}

// Union concepts
function combine (inp1 : number | string, inp2 : number | string) {
    let result : number | string;

    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2
    } else {
        result = inp1.toString() + inp2.toString()
    }

    return result;
}

let result  = combine(2,4)
console.log(result)

// Function declaration
function addNumber (inp1 : number, inp2 : number) {
    return inp1 + inp2
}

let combineValue : (a : number, b: number) => number;

combineValue = addNumber;
console.log(combineValue(1,2))


// Class concepts

class Department {
    name : string;
    private employees : string[] = [];
    private readonly id : number;
    constructor(name :string, id : number) {
        this.name = name
        this.id = id
    }

    descripe() {
        console.log(`Department is ${this.name}`)
        console.log(`Readonly ${this.id}`)
        // this.id = 4;
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    get fetchMostRecentReport() {
        if (!this.employees) {
            throw new Error("No employees")
        }
        return this.employees[this.employees.length - 1]
    }

    set fetchMostRecentReport(value : string) {
        if (!value) {
            throw new Error ("Report cannot be inserted")
        }
        this.addEmployee(value)
    }

    static getName(value : string) {
        return {
            name : value
        }
    }

    printEmployee() {
        console.log("Employee")
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const department = new Department("CSE", 2)
console.log(department)
department.descripe()
department.addEmployee("pradeep")
department.addEmployee("jai")
department.addEmployee("sami")
department.printEmployee()

// department.employees[2] = "Guru"

console.log(department.fetchMostRecentReport) // getter
department.fetchMostRecentReport = "leela" // setter
department.printEmployee()

console.log(Department.getName("pradeep")) // Static access


// Interface concepts

interface Person {
    name : string,
    age : number,
    print(pharse : string) : void
}

let leelaPerson : Person = { 
    name : "leela",
    age : 27,
    print(pharse : string) {
        console.log(`${pharse} Hello ${this.name}`)
    },
    // adress : 'svsvsvsv'
}


// Interface for class concepts
interface IName {
    name : string
}
interface IUser extends IName {
    age : number,
    hello(pharse : string) : void,
}
class User implements IUser {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name
        this.age = age
    }

    hello(pharse : string) {
        console.log(`${pharse} and ${this.name}`)
    }

    greet() {
        console.log(`Hai greeting...`)
    }
}

let person1 = new User("Pradeep", 28)







