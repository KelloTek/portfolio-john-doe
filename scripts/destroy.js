const button = document.getElementById('destroy')

button.addEventListener('change', () => {
    location.reload()
})

if (button.checked) {
    alert("Vous venez d'activer le mode destruction")
    document.body.addEventListener('click', (e) => {
        if (e.target != button && !e.target.matches('#destroy-label')) {
            e.target.remove()
        }
    })
}