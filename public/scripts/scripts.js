const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardId = card.getAttribute('id')
        const cardFood = card.querySelector('.food').innerHTML
        const cardChef = card.querySelector('.card__info p').innerHTML

        modalOverlay.querySelector('img').src = `../assets/${cardId}.png`
        modalOverlay.querySelector('.food').innerHTML = cardFood
        modalOverlay.querySelector('.card__info p').innerHTML = cardChef

        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('.card__image-container img').src = ""
    modalOverlay.querySelector('.food').innerHTML = null
    modalOverlay.querySelector('.card__info p').innerHTML = null
})

