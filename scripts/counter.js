document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 120

    const counter = document.getElementById("counter")
    const button = document.getElementById("start")
    const counterHead = document.getElementById("counter-head")

    if (!button || !counter) {
        console.error("Erreur: Bouton ou compteur non trouvé !")
        return
    }

    button.addEventListener("click", () => {
        button.style.display = "none"
        counterHead.style.display = "block"
        counter.style.display = "block"

        const countdown = setInterval(() => {
            timeLeft--
            counter.textContent = timeLeft

            if (timeLeft <= 0) {
                clearInterval(countdown)
                document.body.style.opacity = "0"
                setTimeout(() => {
                    document.body.remove()
                }, 1000)
            }
        }, 1000)
    })
})
