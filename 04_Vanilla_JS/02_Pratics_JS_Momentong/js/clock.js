const dateContainer = document.querySelector(".js-date"),
    dateTitle = dateContainer.querySelector(".date");

const clockContainer = document.querySelector(".js-date"),
    clockTitle = clockContainer.querySelector(".time");


function getDate() {
    // getYear()는 실제 연도에 1900을 뺀 값을 출력합니다. 가능하면 getFullYear() 메소드를 사용하는 것이 좋습니다.
    // getTime()은 1970년 1월 1일 자정을 기준으로한 밀리초 값을 보여줍니다.
    // getDay()는 요일 데이터를 기준으로 숫자가 출력됩니다. 0은 일요일입니다.
    // getMonth()는 실제 월 값보다 1이 작습니다. 예를 들어 1월은 0이, 5월은 4가 출력됩니다. 따라서 사용 시에는 1을 더해주어야 합니다.
        const date = new Date();
        const years = date.getFullYear();
        const months = date.getMonth() + 1;
        const days = date.getDate();
        dateTitle.innerText = `${years}/${
            months < 10 ? `0${months}` : months}/${
            days < 10 ? `0${days}` : days}`;
    }

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
    getDate(); 
    getTime();
     // setInterval(함수, 반복시간(1000 = 1초)))
     // setInterval(function() { ... }, 지연시간);
     // 일정한 시간 간격으로 작업을 수행하기 위해서 사용
     setInterval(getTime, 1000);
}

init();