// querySelector: load just first tag.
// querySelectorAll: load all tag.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser",
  SHOWING_CLASSNAME = "showing";

function askForName() {
  form.classList.add(SHOWING_CLASSNAME);
  // submit: form 태그에 적용된다.
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // preventDefault(): Block accuring event.
  // 현재 요소에 직접 걸어준 이벤트는 처리하지만 태그의 기본 동작은 작동하지 않도록 막는다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function paintGreeting(text) {
  // form.classList.remove(SHOWING_CLASSNAME); 없어도 작동이 되는듯? 뭐지?
  form.classList.remove(SHOWING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  
  //innerText는 문자열 그대로를 리턴
  //innerHTML은 태그를 적용시켜 문자열을 html로 인식하여 리턴
  greeting.innerText = `Hello! ${text} :) Good to see you!`;
}

function saveName(text) {
  // 키 밸류 저장소이기 때문에 키와 밸류를 순서대로 저장
  // Key: USER_LOCAL_STORAGE, Value: text
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function loadName() {
  // getItem(key)	메서드	해당 키 값의 이름을 가진 데이터를 가져온다.
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
