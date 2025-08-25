
1
for (let i = 0; i < 20; i++) {
    if(i % 4 == 0){
        continue
    }  console.log(i)
}

2
let num = +prompt("Введите число для вычисления его факториала")
let factorial = 1
for(let i = 1; i <= num; i++){
    factorial *= i
}
console.log(`Факториал ${num} - это ${factorial}`)

3

let row = 7
let column = 7
let line = ""

for (let i = 0; i <=column; i++) {
    for (let j = 0; j <= row; j++) {
        if(i % 2 == 0){
            j % 2 ==0 ? line += "  _" : line += "  #"
        }
        else{
            j % 2 ==0 ? line += "  #" : line += "  _"
        }
        
    }
    line += "\n"
}
console.log(line)