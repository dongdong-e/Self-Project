const body = document.querySelector("body");

const IMG_NUMBER = 27;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgimage");
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

function handleImgLoad() {
  console.log("finished load");
}

function genRandom() {
  // floor: 내림
  // ceiling: 올림
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
