/* had trouble using timerStart function,
   didn't work as intended before, as it was implemented as
   timer = setInterval(timerCount();timeInterval);
   Not sure why it doesn't work like that but found a 
   solution at https://github.com/satellasoft/cronometro-js,
   that implemented a similar timer. Ended up refactoring
   my code according to it as it was more polished. */

var minutes = 0;
var seconds = 0;
var hundredths = 0;

var timeInterval = 10;
var timer;

/* start timer */
function timerStart() {
    timer = setInterval(() => { timerCount(); }, timeInterval);
}
function timerPause() {
    clearInterval(timer);
}

function timerCount() {
    if (++hundredths == 99) { 
        hundredths = 0;
        seconds++;
        if (seconds == 59) {
            seconds = 0;
            minutes++;
        }
    }

    var format = (minutes < 10 ? '0' + minutes : minutes) + ':' +
                 (seconds < 10 ? '0' + seconds : seconds) + ':' +
                 (hundredths < 10 ? '0' + hundredths : hundredths);
    
    document.querySelector(".timer").innerText = format;

    return format;
}