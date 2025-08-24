
// // 1
const num = +prompt("Insert number",0)

num % 2 == 0 ? console.log("Yes, it's an even number") : console.log("No, it's an odd number")

// //2
let age = +prompt("Insert your age", 16)
let discount

switch (true){
    case (age <=18):
        discount =10

        break
    case (age <= 65):
        discount =20
        break

    case (age > 65):
        discount =30
        break
}
console.log(`Скидка ${discount}%`)

//3
const username = prompt("Insert user name", "user")
const password = prompt("Insert password", 123456)
if (username == "admin"|| username == "user" && password == "123456"){
    alert("Доступ разрешён")
} else {
    alert("Доступ запрещён")
}

//4
let packegeWeight = prompt("Введите вес посылки, кг", "3")
if(packegeWeight <= 0) {
    alert("Некорректный вес посылки")
}
let shipping = prompt("Введите тип доставки(Стандарт, Экспресс, Премиум)")
switch(shipping){
    case "Стандарт":
        koeficient = 1
        break
    case "Экспресс":
        koeficient = 1.5
        break
    case "Премиум":
        koeficient = 2
        break
    default:
        alert("Неверный тип доставки")
}
let cost
if(packegeWeight <= 1){
    cost =5
}
if(packegeWeight <= 5){
    cost =10
}
if(packegeWeight > 5){
    cost =15
}

fullCost = cost * koeficient
alert(`Итоговая стоимость доставки ${fullCost}$`)



