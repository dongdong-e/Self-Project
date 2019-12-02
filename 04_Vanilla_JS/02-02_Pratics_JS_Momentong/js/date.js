const dateContainer = document.querySelector(".js-date"),
    dateTitle = dateContainer.querySelector("h1");

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



function init(){
    getDate();
}

init();