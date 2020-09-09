cards.forEach(function (card) {
    card.addEventListener('click', function() {
        card.querySelector(".front-face").classList.add("rotate-front-face");
        card.querySelector(".back-face").classList.add("rotate-back-face");
    }
)});