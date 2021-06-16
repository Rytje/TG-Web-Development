let timer = document.getElementsByTagName('h2');
let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let interval = 10;

let outputSeconds = 0;
let outputMinutes = 0;
let outputMiliseconds = 0;


setInterval(function(){
    miliseconds += interval;
    seconds = (miliseconds / 1000);
    minutes = Math.floor(seconds/60);
    // console.log(minutes);
    // console.log(seconds);
    seconds = Math.round(seconds);
    miliseconds = Math.round(miliseconds);

    outputMiliseconds = (miliseconds%1000)/10;
    outputSeconds = seconds%60;
    outputMinutes = minutes;

    timer[0].innerText = centi(outputMinutes) +""+ outputMinutes + ":" + centi(outputSeconds) + outputSeconds + ":" + centi(outputMiliseconds) + outputMiliseconds;
    // console.log(miliseconds % 1000);
}, interval);

console.log(timer[0].innerText);
stop();

function start(){
    interval = 10;
}

function pause(){
    interval = 0;
}

function stop(){
    interval = 0;
    miliseconds = 0;
    seconds = 0;
}

function centi(number){
    if(number < 10){
        return 0;
    } else return ""
}