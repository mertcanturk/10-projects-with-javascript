const newYear = '1 Jan 2023';
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

function Countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/1000;
    
    
    const days = Math.floor(totalSeconds /3600/24);
    const hours = Math.floor(totalSeconds /3600)%24;
    const minutes = Math.floor(totalSeconds /60)%60;
    const seconds = Math.floor(totalSeconds) %60;


    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);


}
function formatTime(time){
    if(time <10){
        return `0${time}`;
    }
    else{
return time;
    }
}

Countdown();
setInterval(Countdown,1000);