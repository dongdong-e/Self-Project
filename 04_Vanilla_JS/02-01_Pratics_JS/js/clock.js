const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    //Date 객체는 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초(천분의 1초(millisecond, ms)))을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수
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
     // setInterval(function() { ... }, 지연시간);
     // 일정한 시간 간격으로 작업을 수행하기 위해서 사용
     setInterval(getTime, 1000);
}

init();