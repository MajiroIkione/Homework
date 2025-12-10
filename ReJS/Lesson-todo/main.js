"use strict"

// id:1
// text:els
// is_completed:false

const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
    priority: "priority"
}

const todos = []
const getNewTodoId = (todos) =>
    (todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1)

let createTodo = (todos, task, priority) => {
    const NewTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: task,
        [todoKeys.is_completed]: false,
        [todoKeys.priority]: priority == undefined ? "medium" : priority
    }
    todos.push(NewTodo)
    return todos
}

const completeTodoById = (todos, todoId) => {
    const todo = todos.find(todo => todo[todoKeys.id] === todoId)
    if (todo === undefined) {
        return null
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed]
    return todo
}

const changePriority = (todos, text, priority) => {
    const index = todos.findIndex(todo => todo[todoKeys.text] === text)
    if (index === -1) return todos
    const todo = todos.splice(index, 1)[0]
    todo.priority = priority
    todos.unshift(todo)
    return todos
}

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId)
    if (todoIndex == -1) {
        console.error("errordddd")
        return todos
    }
    todos.splice(todoIndex, 1)
    return todos
}