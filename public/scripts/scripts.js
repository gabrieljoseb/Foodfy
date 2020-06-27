const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    (
        (index) => {
            cards[i].addEventListener("click", () => {
                window.location.href = `/recipes/${index}`
            })
        }
    ) (i)
}