const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log(form.username.value)
})

const username = 'shaun'
const pattern = /^[a-zA-Z]{6,}$/

// let result = pattern.test(username)
// console.log(result)



// Returns the number where it finds the pattern
let result = username.search(pattern)
console.log(result)