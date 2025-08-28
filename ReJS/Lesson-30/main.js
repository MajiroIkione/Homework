// 1
calculateFinalPrice(100,10,0.2)
calculateFinalPrice(100,10,0)

function calculateFinalPrice(basePrice,discountPercent,taxPart){

let discount = (discountPercent/ 100) * basePrice
let discountPrice = (basePrice - discount)
let taxPrice = discountPrice*taxPart
let finalPrice = discountPrice + taxPrice
console.log(finalPrice)
}

//2
const checkAccess = (userName, password) => {
    if (userName == "admin" || userName == "user" && password == "123456") {
        return alert("Доступ разрешён")
    } else {
        return alert("Доступ запрещён")
    }
}
let userName = prompt("Insert user name", "user")
const password = prompt("Insert password", 123456)

checkAccess(userName,password)

//3
function getTimeOfDay(hour) {
    if (hour >= 23) { return console.log("incorrect time inserted") }
    if (hour >= 0 && hour <= 5) { return console.log("It's night time") }
    if (hour <= 11) { return console.log("It's morning") }
    if (hour <= 17) { return console.log("It's daytime") }
    if (hour <= 23) { return console.log("It's evening") }
}

let time = +prompt("insert the number of time in hours")
getTimeOfDay(time)


//4
let start = +prompt("insert first number")
let end = +prompt("insert second number")

function findFirstEven(start, end){
    for (i = start; i <= end; i++) {
        if (i % 2 == 0) {
            let even = i
            if (even == null) {
                return console.log(`The is no even numbers between ${start} and ${end}`)
            } else { return console.log(`The first even number between ${start} and ${end} is ${i}`) }
        }
    }
}
findFirstEven(start, end)
