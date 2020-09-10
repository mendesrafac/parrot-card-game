/* gets the number of cards the player wants in the game */
var numCards = parseInt(prompt("Quantas cartas quer jogar? Escolha um número entre 4 e 14"));

/* while numCards < 4, > 14, an odd number or not a number at all (treats strings) */
while(numCards < 4 || numCards > 14 || numCards & 1 || isNaN(numCards)) {
    numCards = parseInt(prompt("Quantas cartas quer jogar? Escolha um número entre 4 a 14"));
}

/*  need to work with pairs as it's necessary that
    cards are duplicated */
var numPairs = numCards / 2;

/* the array cards starts empty */
var cards = [];

/*  and it's filled everytime a card is created by
    the card itself and it's clone */
for (let index = 0; index < numPairs; index++) {
    var card = createCard();
    var clone = card.cloneNode(true);
    cards.push(card);
    cards.push(clone);
}

/*  here, a non optimal, yet simple shuffle method is used
    because the cards.length will always be small */
var shuffledCards = cards.sort(() => .5 - Math.random());

/* with the cards shuffled, appendChild is used */
shuffledCards.forEach(function (card) {
    document.querySelector("main").appendChild(card);
});