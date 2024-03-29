const correctAnswers = ['B', 'B', 'B', 'B',]

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,]

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25
        }
    })


    scrollTo(0, 0)

    result.classList.remove('d-none')

    let intervalId = -1
    let output = 0
    intervalId = setInterval(()=> {
        result.querySelector('span').textContent = `${output}%`
        if(output >= score) {
            clearInterval(intervalId)
        }
        output++
    }, 20)
})