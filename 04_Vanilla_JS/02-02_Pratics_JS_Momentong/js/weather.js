const weather = document.querySelector(".js-weather");

const API_KEY = "dcc90e16c03034e00a4743a5dd378d2b";
const COORDS = "coords";

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location :(");
}


function saveCoords(coordsObj) {
  // 키 밸류 저장소이기 때문에 키와 밸류를 순서대로 저장
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}°C @ ${place}`;
  });
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
  /* {latitude: 37.6248, longitude: 126.6684}
      latitude: 37.6248
      longitude: 126.6684
      __proto__: Object */
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
