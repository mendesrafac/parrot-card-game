var getCards = Array.from(document.querySelectorAll(".card"));

var hasFlipped = false;
var previousCard, currentCard;
var firstAlt, secondAlt;
var flipCount = 0;
var missingPairs = numPairs;

/*  Had trouble removing click function from matched cards,
    found a solution at https://youtu.be/ZniVgo8U7ek by
    implementing event function outside the loop, this way
    it's possible to use removeEventListener(). */

getCards.forEach(card => card.addEventListener('click', flipCondition));

function flipCondition () {
    
    flipCard(this);
    
    if (!hasFlipped) {

        hasFlipped = true;
        previousCard = this;

        /* gets alt attribute from this card */
        firstAlt = previousCard.querySelector(".back-face img").getAttribute("alt");

    }  else {

        hasFlipped = false;
        currentCard = this;

        /* gets alt attribute from this card */
        secondAlt = currentCard.querySelector(".back-face img").getAttribute("alt");
        
        /* if they are the same */
        if (firstAlt === secondAlt) {

            /* removes click function from event so they cant be
               flipped anymore */
            previousCard.removeEventListener('click', flipCondition);
            currentCard.removeEventListener('click', flipCondition);
            missingPairs--;
        
        } else {

            /* unflip both cards with 1second delay */
            setTimeout (function (){
                
                unflipCard(previousCard);
                unflipCard(currentCard);

            }, 1000);
        }
    }
    gameCleared();
};

function flipCard(element) {
    element.querySelector(".front-face").classList.add("rotate-front-face");
    element.querySelector(".back-face").classList.add("rotate-back-face");
    flipCount++;
}

function unflipCard(element) {
    element.querySelector(".front-face").classList.remove("rotate-front-face");
    element.querySelector(".back-face").classList.remove("rotate-back-face");
}