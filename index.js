

const minute = document.querySelector("#countMin")
const second = document.querySelector("#countSec")
const alarm  = document.getElementById("audioTimer")
const timer =document.querySelector(".timer")
alarm.style.display = "none"

let count = 180
let timerId =0
function countingStart () {
    if (timerId !== 0) {
        return;
    }
    timer.classList.add("click")
    timerId =setInterval(function () {
        count--
       updateText(count)
       if(count < 0) {
        playAlarm();
        return countingStop ()
       }
       if(count % 60 === 0) {

    }
    },1000)
}

function countingStop () {
    clearInterval(timerId);
    second.innerText = "00" ;
    timerId = 0;
    count = 180;
    timer.classList.remove("click")
    updateText(count);
}

function updateText (timer) {
    const min = Math.floor(timer/60) ;
    const sec = timer % 60 ;
    minute.innerText = min <10 ? "0" + min.toString() : min;
    second.innerText = sec <10 ? "0" + sec.toString() : sec;
}

function playAlarm() {
    alarm.play()
}