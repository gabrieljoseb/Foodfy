const cards = document.querySelectorAll('.card')
const ingredientsButton = document.querySelector('.ingredients .main a')
const preparationButton = document.querySelector('.preparation .main a')
const informationButton = document.querySelector('.information .main a')

for (let i = 0; i < cards.length; i++) {
    (
        (index) => {
            cards[i].addEventListener("click", () => {
                window.location.href = `/recipes/${index}`
            })
        }
    )(i)
}

function changeButtonName(button) {
    if (button.textContent == 'esconder')
        button.textContent = 'mostrar'
    else
        button.textContent = 'esconder'
}

ingredientsButton.addEventListener('click', () => {
    changeButtonName(ingredientsButton)

    document.querySelector('#ingredients-text').classList.toggle('hide')
})

preparationButton.addEventListener('click', () => {
    changeButtonName(preparationButton)

    document.querySelector('#preparation-text').classList.toggle('hide')
})

informationButton.addEventListener('click', () => {
    changeButtonName(informationButton)

    document.querySelector('#information-text').classList.toggle('hide')
})