const todos = [
    {text: 'play mariokart', author:'shaun'},
    {text: 'buy some milk', author:'mario'},
    {text: 'buy some bread', author:'luigi'}
]

// store data in local storage
localStorage.setItem('name', 'mario')
localStorage.setItem('age', 50)
localStorage.setItem('todos', JSON.stringify(todos))


// get data in local storage
let name = localStorage.getItem('name')
console.log(name);

// updating data
localStorage.setItem('name', 'eric')

// deleteing data from local storage

name = localStorage.getItem('name')
console.log(name);