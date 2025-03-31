const loadingScreen = document.getElementById('loading-screen')

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.setProperty('display', 'none')
    }, 2000)
})