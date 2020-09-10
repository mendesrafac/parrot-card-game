function gameCleared () {
    if(!missingPairs) {
        timerPause();
        setTimeout(function() {
            alert("Você venceu em " + flipCount + " jogadas!" + "\n\n" +
                  "Tempo decorrido: "+ document.querySelector(".timer").innerText);
            
            var answer = prompt("Deseja jogar novamente?");
            if (answer.toLowerCase()==="sim") location.reload();
        }, 500);
    }
}
