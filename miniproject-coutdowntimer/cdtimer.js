// selecting IDs

const daysElement = document.getElementById ('days');
const hoursElement = document.getElementById ('hours');
const minutesElement = document.getElementById ('minutes');
const secondsElement = document.getElementById ('seconds');





// function
// to find remaining time : Ending date - Current Date and calculating days, hours, mins and secs
// to map found numbers to HTML elements

const schedule = '08/23/2022';

function countDown() {
    const endDate = new Date(schedule);
    const currentDate = new Date();

    const inMiliSeconds = (endDate.getTime() - currentDate.getTime());
    const inSeconds = Math.floor((inMiliSeconds/1000) % 60);
    const inMins = Math.floor((inMiliSeconds/1000/60) % 60);
    const inHours = Math.floor((inMiliSeconds/(1000*60*60)) % 24);
    const inDays = Math.floor(inMiliSeconds/(1000*60*60*24));

    daysElement.innerHTML = inDays;
    hoursElement.innerHTML = formatTime(inHours);
    minutesElement.innerHTML = formatTime(inMins);
    secondsElement.innerHTML = formatTime(inSeconds);
}





// to add 0 next to numbers if they are less than 10

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}




// calling the func every second

countDown();
setInterval(countDown, 1000);