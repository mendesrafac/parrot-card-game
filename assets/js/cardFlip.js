var getCards = Array.from(document.querySelectorAll(".card"));

getCards.forEach(function (card) {
    card.addEventListener('click', function() {
        card.querySelector(".front-face").classList.add("rotate-front-face");
        card.querySelector(".back-face").classList.add("rotate-back-face");
    }
)});

/*let hasFlipped = false;
let firstCard, secondCard;

function flippedCondition () {
    
    this.querySelector(".front-face").classList.add("rotate-front-face");
    this.querySelector(".back-face").classList.add("rotate-back-face");
        
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        var firstAlt = firstCard.querySelector(".back-face img").alt;
    } else {
        hasFlipped = false;
        secondCard = this;
        var secondAlt = secondCard.querySelector(".back-face img").alt;
    }
    
    if (firstAlt === secondAlt) {
        firstCard.removeEventListener('click', flippedCondition);
        secondCard.removeEventListener('click', flippedCondition);
    } else {
        setTimeout (function (){
            /*unflipCard(previousCard);
            unflipCard(currentCard);
            firstCard.querySelector(".front-face").classList.remove("rotate-front-face");
            firstCard.querySelector(".back-face").classList.remove("rotate-back-face");

            secondCard.querySelector(".front-face").classList.remove("rotate-front-face");
            secondCard.querySelector(".back-face").classList.remove("rotate-back-face");

        }, 1000);
    }
};

getCards.forEach(card => card.addEventListener('click', flippedCondition));*/