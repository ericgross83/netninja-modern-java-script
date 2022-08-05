const addForm = document.querySelector('.add')
const todos = document.querySelector('.todos')
const search = document.querySelector('.search input')


const filterTodos = (term) => { 
    Array.from(todos.children)
    .filter((element) => !element.textContent.toLowerCase().includes(term))    
    .forEach((element) => element.classList.add('filtered'))

    Array.from(todos.children)
    .filter((element) => element.textContent.toLowerCase().includes(term))    
    .forEach((element) => element.classList.remove('filtered'))
 }

search.addEventListener('keyup', (e) => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
})

todos.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    } else {
        e.target.classList.toggle('finished')
    }
})


const generateTemplate = (name) => {

    const newTodo = `<li class="text-light list-group-item d-flex justify-content-between align-items-center">
    <span>${name}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    todos.innerHTML += newTodo
}

addForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const input = addForm.add.value.trim()

    if (input) {
        generateTemplate(input)
    }

    addForm.reset()

})