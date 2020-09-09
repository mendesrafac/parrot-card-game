const imgPaths = [
    '<img src="./assets/images/bobrossparrot.gif" alt="bobrossparrot">',
    '<img src="./assets/images/explodyparrot.gif" alt="explodyparrot">',
    '<img src="./assets/images/fiestaparrot.gif" alt="fiestaparrot">',
    '<img src="./assets/images/metalparrot.gif" alt="metalparrot">',
    '<img src="./assets/images/revertitparrot.gif" alt="revertitparrot">',
    '<img src="./assets/images/tripletsparrot.gif" alt="tripletsparrot">',
    '<img src="./assets/images/unicornparrot.gif" alt="unicornparrot">',
];

function createCards () {
    var card = document.createElement("div");
    var front = document.createElement("div");
    var back = document.createElement("div");
    
    card.classList.add("card");
    front.classList.add("face");
    front.classList.add("front-face");
    back.classList.add("face");
    back.classList.add("back-face");

    card.appendChild(front);
    card.appendChild(back);
    front.innerHTML = "<img src='./assets/images/front.png' alt='parrot'>";   
    
    var backImg = imgPaths[Math.floor(Math.random()*imgPaths.length)];

    back.innerHTML = backImg;
    
    return card;
}