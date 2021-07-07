const newYear = '12 Nov 2021';
const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function countDown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds)% 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 60 / 60) % 24;
    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    diasEl.innerHTML = formatTime(days);
    horasEl.innerHTML = formatTime(hours);
    minutosEl.innerHTML = formatTime(minutes);
    segundosEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000)