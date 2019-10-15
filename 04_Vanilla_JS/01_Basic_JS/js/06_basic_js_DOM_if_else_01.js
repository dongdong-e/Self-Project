const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#1B9CFC";

function handleClick() {
  //   console.log(title.style.color);
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  //   title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
}

init();

// online, offline
function handleOffline() {
  console.log("Offline Mode.");
}

function handleOnline() {
  console.log("Online Mode.");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);