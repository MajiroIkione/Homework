const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)
//1
// console.log(users)


//2
let sum = 0
function getUserAverageAge(users) {
    let sum = 0
    users.forEach(user => {
        sum += user.age
    })
    return sum / users.length;
}

// console.log(getUserAverageAge(users))


//3
function IsAdmins(users){
    let admins = []
    users.forEach(user => {
        if(user.isAdmin == true){
            admins.push(user)
        }
    });
    return admins
}

// console.log(IsAdmins(users))

//4
let numbers = [1, 10, 88, 4, 57, 120, 33]

function first(arr, n){
    let firstOf = []
    if(n === undefined){return arr[0]}
    if(n > arr.length){return console.error(`не может быть больше длины массива: ${arr.length}`) }
            for(let i = 0; i < n ; i++)
                firstOf.push(arr[i])
        return firstOf
}

console.log(first(numbers, 11))