const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // ${hours < 10 ? `0${hours}` : hours}
    // if hours less than 10 print 0${hours}, else print hours
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
     getTime();
     // setInterval(함수, 반복시간(1000 = 1초)))
     setInterval(getTime, 1000);
}

init();