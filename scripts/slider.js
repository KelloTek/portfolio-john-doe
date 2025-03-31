const sliderImage = document.getElementById('slider-image')
const bullets = document.querySelectorAll('.radio-btn')
let currentIndex = 0
const autoplayInterval = 5000

function changeImage(index) {
    bullets[index].checked = true

    const newImage = bullets[index].getAttribute('data-image')
    const newAlt = bullets[index].getAttribute('data-alt')
    sliderImage.classList.add('hidden')
    sliderImage.alt = newAlt

    setTimeout(() => {
        sliderImage.src = newImage
        sliderImage.classList.remove('hidden')
    }, 100)
}

function startAutoplay() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % bullets.length
        changeImage(currentIndex)
    }, autoplayInterval)
}

startAutoplay()

bullets.forEach((bullet, index) => {
    bullet.addEventListener('change', () => {
        if(bullet.checked) {
            currentIndex = index
            changeImage(currentIndex)
        }
    })
})