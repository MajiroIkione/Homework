const usersq = ['Cassian', 'Nix', 'Eve', 'Charlotte']

function helloUser(name) {
    for (let i = 0; i < usersq.length; i++) {
        if (usersq[i] === name) {
            return `Hello, ${name}`
        }
    }
return `There is no user named ${name}`
}

console.log(helloUser('Nix'))

////////////////////////////////////////////////


const numbers = [10, 20, 3, 100, 11, 50]
let over = 0
function OverTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10){
            over = array[i]
            console.log(over)
        }   
    }
}
console.log(OverTen(numbers))

///////////////////////////////////////////////////////
let result = 0
function calculator(num1, num2, act)
{
    if (act === '+'){
        result = num1 + num2
        return result}
    else {
        if(act === '-'){
        result = num1 - num2
        return result} 
        else {
            if(act === '*'){
            result = num1 * num2
            return result} 
            else {
                if(act === '/'){
                result = num1 / num2
                return result} }
            }
        }
    }

console.log('Result: '+calculator(3, 5, '*'));

// /////////////////////////////////////////////////////////
const users = {
    alex:{
        age: 23,
        isAdmin: false
    },
    john:{
        age: 27,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello, ${name}`)
        }
    }
}

console.log(users.john)
users.john.sayHello('Tom')

// ////////////////////////////////////////////////////////

const userss = [
    {   name: 'Alex',
        age: 23,
        isAdmin: true
    },

    {   name: 'Marty',
        age: 23,
        isAdmin: false
    },
    {   name: 'James',
        age: 23,
        isAdmin: false
    },

    {   name: 'John',
        age: 27,
        isAdmin: false
    }
]
let usuals = 0;


for (i = 0; i < users.length; i++) {
    if (userss[i].isAdmin === false) {
        usuals = usuals + 1
    }
}

console.log(`There are ${usuals} users`)