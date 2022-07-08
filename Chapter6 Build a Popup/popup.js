const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')
const cancel = document.querySelector('.popup-close')

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})


cancel.addEventListener('click', () => {
    popup.style.display = 'none'
})

button.addEventListener('click', () => {
    popup.style.display = 'block';
})