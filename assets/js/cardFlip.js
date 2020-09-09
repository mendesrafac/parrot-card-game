var cards = Array.from(document.querySelectorAll(".card"));

cards.forEach(function (card) { //not working yet
    card.addEventListener('click', function() {
        document.querySelector(".front-face").classList.add(".rotate-front-face");
        document.querySelector(".back-face").classList.add(".rotate-back-face");
    }
)});