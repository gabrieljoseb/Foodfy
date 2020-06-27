const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardId = card.getAttribute('id')
        const cardFood = card.querySelector('.food').innerHTML
        const cardChef = card.querySelector('.card__info p').innerHTML

        
    })
}