// 1
const person = {
    firstName: "Ashley",
    lastName: "Maddison",
    age: "30"
}
for (data in person){
    console.log(data, person[data])
}

// 2
let items ={
    1: "pen",
    2: "pencil"
}
const isEmpty = object =>{
        console.log(Object.keys(object).length === 0);
}
isEmpty(items)

// 3
let task = {
    title: "Make pie",
    description: "cook pie",
    isCompleted: false
}
const modifications ={
    title: "Make pie",
    description: "bye pie",
    isCompleted: true
}

function cloneAndModify(object, modifications) {
return { ...object, ...modifications }
}

const updatedTask = cloneAndModify(task, modifications)

for (change in updatedTask) {
    console.log(change + " : " + updatedTask[change])
}

//4
function callAllMethods(object){
    for(key in object){
        if(typeof(object[key]) == "function"){
            console.log(object[key])
        }
    }
}

const alarmClock = {
    firstTry(){
        let time ="Get up"
    },
    lastTry(){
        let time ="It's still not too late"
    },
    1: "not a method" 
}


callAllMethods(alarmClock)