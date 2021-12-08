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






