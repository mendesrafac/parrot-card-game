var cards = Array.from(document.querySelectorAll(".card"));
var numCards = parseInt(prompt("Quantas cartas quer jogar? Escolha um número entre 4 e 14"));

while(numCards < 4 || numCards > 14 || numCards & 1 || isNaN(numCards)) {
    numCards = parseInt(prompt("Quantas cartas quer jogar? Escolha um número entre 4 a 14"));
}

let shuffled = cards.sort(() => .5 - Math.random()).slice(0,numCards);

shuffled.forEach(function(element) {
    element.classList.add("visible");
});