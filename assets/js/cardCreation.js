/* the array imgPaths contains all paths to back images of the project */
var imgPaths = [
    '<img src="./assets/images/bobrossparrot.gif" alt="bobrossparrot">',
    '<img src="./assets/images/explodyparrot.gif" alt="explodyparrot">',
    '<img src="./assets/images/fiestaparrot.gif" alt="fiestaparrot">',
    '<img src="./assets/images/metalparrot.gif" alt="metalparrot">',
    '<img src="./assets/images/revertitparrot.gif" alt="revertitparrot">',
    '<img src="./assets/images/tripletsparrot.gif" alt="tripletsparrot">',
    '<img src="./assets/images/unicornparrot.gif" alt="unicornparrot">',
];

function createCard () {
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
    /* Gets random position of imgPaths */    
    var randomPos = Math.floor(Math.random()*imgPaths.length);
        
    var backImg = imgPaths[randomPos];
    /* add back image to the card */    
    back.innerHTML = backImg;

    /*  removes the back image path from the imgPaths array
        so it can't be selected more than once */
    imgPaths = imgPaths.filter(item => item != backImg);

    return card;
}



