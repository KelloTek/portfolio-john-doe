const buttonNature = document.getElementById('a-nature')
const textNature = document.getElementById('nature')

buttonNature.addEventListener('click', () => {
    textNature.classList.toggle('hidden')
})

const buttonEvents = document.getElementById('a-events')
const textEvents = document.getElementById('events')

buttonEvents.addEventListener('click', () => {
    textEvents.classList.toggle('hidden')
})

const buttonPepeole = document.getElementById('a-pepeole')
const textPepeole = document.getElementById('pepeole')

buttonPepeole.addEventListener('click', () => {
    textPepeole.classList.toggle('hidden')
})

const buttonPhoto = document.getElementById('a-photo')
const textPhoto = document.getElementById('photo')

buttonPhoto.addEventListener('click', () => {
    textPhoto.classList.toggle('hidden')
})