function gameCleared () {
    if(!missingPairs) {
        setTimeout(function() {
            alert("Você venceu em " + flipCount + " jogadas!");
        }, 500);
    }
}
