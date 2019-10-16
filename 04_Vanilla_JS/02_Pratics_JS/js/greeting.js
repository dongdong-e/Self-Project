// querySelector: load just first tag.
// querySelectorAll: load all tag.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
  SHOWING_CLASSNAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  // preventDefault(): Block accuring event.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASSNAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // form.classList.remove(SHOWING_CLASSNAME); 없어도 작동이 되는듯? 뭐지?
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hello! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
  if (currentUser === null) {
    // User is not exsist.
    askForName();
  } else {
    // User is exsist.
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
